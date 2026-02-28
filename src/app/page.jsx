"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function page() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const getMe = async () => {
      const response = await fetch("/api/me", {
        method: "GET",
      });

      if (!response.ok) {
        setCheckingAuth(false);
        return;
      }

      const data = await response.json();
      console.log(data);

      // 🔹 user already logged in → go to dashboard
      router.replace("/dashboard");
    };

    getMe();
  }, [router]);

  //    login will NOT appear
  if (checkingAuth) {
    return null;
  }

  const handleLogin = async () => {
    console.log(username);
    console.log(password);

    setUsername("");
    setPassword("");

    const response = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      alert("Please provide username and password");
      return;
    }

    const data = await response.json();
    console.log(data);

    // 🔹 successful login → single redirect
    router.push("/dashboard");
  };

  // const handleLogout = async () => {
  //   const response = await fetch("api/logout", {
  //     method: "POST",
  //   });

  //   if (response.ok) {
  //     router.push("/");
  //   }
  // };

  return (
    <>
      <div className="loginPage flex flex-col items-right gap-4 p-4">
        <label htmlFor="">Login</label>

        <label className="gap-2 flex">
          <input
            className="bg-violet-500"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
        </label>

        <label className="gap-2 flex">
          <input
            className="bg-violet-500"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>

        <button onClick={handleLogin} className="loginButton bg-blue-500 w-fit">
          Login
        </button>

        {/* <button onClick={handleLogout} className="loginButton">
          Logout
        </button> */}

        <Link href="/signup">Create Account</Link>
      </div>
    </>
  );
}
