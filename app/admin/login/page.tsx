"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { redirect } from "next/navigation";
import { Mail, Lock, Leaf } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/check");
        const data = await res.json();
        setIsAdmin(data.authenticated);
      } catch (err) {
        setIsAdmin(false);
      } finally {
        setChecked(true);
      }
    }
    checkAuth();
  }, []);

  if (isAdmin) {
    redirect("/admin/panel");
  }

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/admin/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/admin/panel");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#eef1ec] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-800 flex items-center justify-center text-white font-bold text-lg mb-4">
            RVD
          </div>
          <h1 className="text-2xl font-extrabold text-green-900">
            RMD VET BIOTECH
          </h1>
          <p className="text-yellow-600 text-xs font-semibold tracking-wide mt-1">
            SCIENCE FOR ANIMAL HEALTH
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <div className="flex items-center gap-2 mb-2">
            <Leaf size={16} className="text-yellow-600" />
            <span className="text-yellow-600 text-xs font-bold tracking-wider">
              ADMIN ACCESS
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-green-900 mb-1">
            {loading ? "Processing..." : "Welcome Back"}
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Sign in to manage your products and content.
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                  placeholder="admin@rmdvetbiotech.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100 transition-colors"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={onLogin}
              disabled={buttonDisabled || loading}
              className="w-full bg-green-900 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-full transition-colors mt-2"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </div>

          {/* <Link href="/signup">Visit Signup page</Link> */}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          Restricted access &middot; Authorized personnel only.
        </p>
      </div>
    </div>
  );
}