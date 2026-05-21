import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { apiGet, apiPost } from "../utils/api";

type User = {
  id: number;
  name: string;
  email: string;
  role: "super_admin" | "faculty_publisher";
  facultyId?: number | null;
  faculty?: { id: number; name: string; slug: string } | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
  isPublisher: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ulpgl_token");
    if (!token) {
      setLoading(false);
      return;
    }
    apiGet("/auth/me")
      .then((d) => setUser(d.user))
      .catch(() => {
        localStorage.removeItem("ulpgl_token");
        localStorage.removeItem("ulpgl_user");
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const data = await apiPost("/auth/login", { email, password });
    localStorage.setItem("ulpgl_token", data.token);
    localStorage.setItem("ulpgl_user", JSON.stringify(data.user));
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("ulpgl_token");
    localStorage.removeItem("ulpgl_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAdmin: user?.role === "super_admin",
        isPublisher: user?.role === "faculty_publisher",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
