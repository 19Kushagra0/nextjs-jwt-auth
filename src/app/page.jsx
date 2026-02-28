"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./style/login.module.css";

export default function page() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const getMe = async () => {
      const response = await fetch("/api/me", { method: "GET" });

      if (!response.ok) {
        setCheckingAuth(false);
        return;
      }

      const data = await response.json();
      console.log(data);
      router.replace("/dashboard");
    };

    getMe();
  }, [router]);

  if (checkingAuth) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setUsername("");
    setPassword("");

    if (!response.ok) {
      alert("Please provide username and password");
      return;
    }

    const data = await response.json();
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Secure Access</div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className={styles.input}
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className={styles.input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className={styles.button} type="submit">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.footerText}>
          Don&apos;t have an account?{" "}
          <Link className={styles.link} href="/signup">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
