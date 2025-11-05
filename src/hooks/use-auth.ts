import axios from "axios";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<null | Record<string, unknown>>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      setIsLoading(false);
      return;
    }
    axios
      .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setUser(res.data);
        setIsAuthenticated(true);
      })
      .catch(() => {
        localStorage.removeItem("auth_token");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const signIn = async (provider?: string, formData?: FormData) => {
    if (provider === "anonymous") {
      const res = await axios.post("/api/auth/anonymous");
      localStorage.setItem("auth_token", res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      return;
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
