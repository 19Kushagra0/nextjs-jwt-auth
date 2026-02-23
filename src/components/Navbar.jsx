"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.replace("/"); // go back to login
    }
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <span>My App</span>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
