"use client";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", { method: "POST" });
    if (res.ok) {
      router.replace("/");
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Brand */}
      <div className={styles.brand}>
        <span className={styles.brandDot} />
        <span className={styles.brandName}>MyApp</span>
      </div>

      {/* Right side */}
      <div className={styles.right}>
        <span className={styles.username}>Dashboard</span>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          ⇤ Logout
        </button>
      </div>
    </nav>
  );
}
