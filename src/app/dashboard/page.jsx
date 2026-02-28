import Navbar from "@/components/Navbar";
import styles from "./dashboard.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {/* Welcome */}
        <div className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>Welcome back 👋</h1>
          <p className={styles.welcomeSub}>
            Here&apos;s what&apos;s happening with your account today.
          </p>
        </div>

        {/* Stat Cards */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.green}`}>👤</div>
            <p className={styles.statLabel}>Total Users</p>
            <p className={styles.statValue}>1,284</p>
            <span className={styles.statBadge}>+12% this week</span>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.purple}`}>📦</div>
            <p className={styles.statLabel}>Orders</p>
            <p className={styles.statValue}>348</p>
            <span className={styles.statBadge}>+5% this week</span>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.blue}`}>💬</div>
            <p className={styles.statLabel}>Messages</p>
            <p className={styles.statValue}>92</p>
            <span className={styles.statBadge}>3 unread</span>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.orange}`}>⚡</div>
            <p className={styles.statLabel}>Active Sessions</p>
            <p className={styles.statValue}>17</p>
            <span className={styles.statBadge}>Live now</span>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className={styles.bottomGrid}>
          {/* Recent Activity */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Recent Activity</h2>
              <a href="#" className={styles.panelLink}>
                View all
              </a>
            </div>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <span className={`${styles.activityDot} ${styles.green}`} />
                <span className={styles.activityText}>New user registered</span>
                <span className={styles.activityTime}>2m ago</span>
              </div>
              <div className={styles.activityItem}>
                <span className={`${styles.activityDot} ${styles.purple}`} />
                <span className={styles.activityText}>Order #1042 placed</span>
                <span className={styles.activityTime}>18m ago</span>
              </div>
              <div className={styles.activityItem}>
                <span className={`${styles.activityDot} ${styles.blue}`} />
                <span className={styles.activityText}>
                  New message received
                </span>
                <span className={styles.activityTime}>1h ago</span>
              </div>
              <div className={styles.activityItem}>
                <span className={`${styles.activityDot} ${styles.orange}`} />
                <span className={styles.activityText}>
                  Password reset requested
                </span>
                <span className={styles.activityTime}>3h ago</span>
              </div>
              <div className={styles.activityItem}>
                <span className={`${styles.activityDot} ${styles.green}`} />
                <span className={styles.activityText}>
                  User profile updated
                </span>
                <span className={styles.activityTime}>5h ago</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Quick Actions</h2>
            </div>
            <div className={styles.actionList}>
              <button className={styles.actionBtn}>
                <span className={styles.actionIcon}>➕</span>
                Add New User
              </button>
              <button className={styles.actionBtn}>
                <span className={styles.actionIcon}>📋</span>
                View Orders
              </button>
              <button className={styles.actionBtn}>
                <span className={styles.actionIcon}>⚙️</span>
                Account Settings
              </button>
              <button className={styles.actionBtn}>
                <span className={styles.actionIcon}>📊</span>
                Export Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
