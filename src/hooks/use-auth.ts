import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | Record<string, unknown>>(null);
  const adminLogin = useMutation(api.auth.adminLogin);

  useEffect(() => {
    // Check if user is authenticated (admin or other)
    const isAdmin = localStorage.getItem("is_admin") === "true";
    const token = localStorage.getItem("auth_token");
    
    if (isAdmin) {
      setUser({ isAdmin: true, provider: "admin" });
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }
    
    if (token) {
      // For non-admin auth, check with Express API if needed
      axios
        .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setUser(res.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("is_admin");
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const signIn = async (provider?: string, formData?: FormData) => {
    if (provider === "anonymous") {
      const res = await axios.post("/api/auth/anonymous");
      localStorage.setItem("auth_token", res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      return;
    }
    if (provider === "admin") {
      const username = formData?.get("username") as string | null;
      const password = formData?.get("password") as string | null;
      if (!username || !password) {
        throw new Error("Username and password are required");
      }
      // Use Convex mutation for admin login
      const result = await adminLogin({ username, password });
      if (result.success) {
        localStorage.setItem("is_admin", "true");
        setUser({ isAdmin: true, provider: "admin" });
        setIsAuthenticated(true);
        return;
      } else {
        throw new Error("Invalid username or password");
      }
    }
    if (provider === "email-otp") {
      const email = formData?.get("email") as string | null;
      const code = formData?.get("code") as string | null;
      if (email && !code) {
        await axios.post("/api/auth/email/request", { email });
        return;
      }
      if (email && code) {
        const res = await axios.post("/api/auth/email/verify", { email, code });
        localStorage.setItem("auth_token", res.data.token);
        setUser(res.data.user);
        setIsAuthenticated(true);
        return;
      }
      throw new Error("Missing email or code");
    }
  };

  const signOut = async () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("is_admin");
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    isLoading,
    isAuthenticated,
    user,
    signIn,
    signOut,
  };
}
