import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Loader2, LogOut, Download } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export default function AdminPage() {
  const { isLoading: authLoading, isAuthenticated, signOut, user } = useAuth();
  const navigate = useNavigate();
  const submissions = useQuery(api.formSubmissions.getAllSubmissions);

  useEffect(() => {
    // First check localStorage directly (faster, no race condition)
    const isAdminLocal = localStorage.getItem("is_admin") === "true";
    
    // If admin flag is in localStorage, user is authenticated as admin
    if (isAdminLocal) {
      // User is admin, allow access - don't redirect
      return;
    }
    
    // If not in localStorage and auth is still loading, wait
    if (authLoading) {
      return;
    }
    
    // If not authenticated and not loading, redirect to login
    if (!isAuthenticated) {
      navigate("/auth?redirect=/admin");
      return;
    }
    
    // If authenticated but not admin, check user object
    const isAdmin = (user as { isAdmin?: boolean })?.isAdmin === true ||
                   (user as { provider?: string })?.provider === "admin";
    if (!isAdmin) {
      // Not an admin, redirect to home
      navigate("/");
    }
  }, [authLoading, isAuthenticated, navigate, user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleExportCSV = () => {
    if (!submissions || submissions.length === 0) {
      return;
    }

    const headers = ["Full Name", "Company", "Contact Number", "Email", "Submitted At"];
    const rows = submissions.map((sub) => [
      sub.fullName,
      sub.company || "",
      sub.contactNumber || "",
      sub.email,
      format(new Date(sub.submittedAt), "yyyy-MM-dd HH:mm:ss"),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `form-submissions-${format(new Date(), "yyyy-MM-dd")}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[var(--brand-gold)]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
              <p className="text-white/70">
                View all form submissions
              </p>
            </div>
            <div className="flex gap-4">
              {submissions && submissions.length > 0 && (
                <Button
                  onClick={handleExportCSV}
                  className="bg-[var(--brand-gold)] text-black hover:bg-[rgba(var(--brand-gold-rgb),0.9)]"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              )}
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          {submissions === undefined ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[var(--brand-gold)]" />
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/70 text-lg">No submissions yet.</p>
            </div>
          ) : (
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 bg-white/5">
                    <TableHead className="text-white">Full Name</TableHead>
                    <TableHead className="text-white">Company</TableHead>
                    <TableHead className="text-white">Contact Number</TableHead>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Submitted At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow
                      key={submission._id}
                      className="border-white/10 hover:bg-white/5"
                    >
                      <TableCell className="text-white/90 font-medium">
                        {submission.fullName}
                      </TableCell>
                      <TableCell className="text-white/70">
                        {submission.company || "—"}
                      </TableCell>
                      <TableCell className="text-white/70">
                        {submission.contactNumber || "—"}
                      </TableCell>
                      <TableCell className="text-white/70">
                        {submission.email}
                      </TableCell>
                      <TableCell className="text-white/70">
                        {format(new Date(submission.submittedAt), "MMM dd, yyyy HH:mm")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {submissions && submissions.length > 0 && (
            <div className="mt-4 text-sm text-white/50 text-center">
              Total submissions: {submissions.length}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

