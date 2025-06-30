"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "context/AuthContext"; // use correct relative or alias path

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return <>{token ? children : null}</>;
}
