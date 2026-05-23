import styles from "../layout.module.css";

const applicationItems = [
  { icon: "fa-files-o", title: "Registered Nurse (RN)", tone: "Clinical role" },
  { icon: "fa-file-text", title: "LVN/LPN", tone: "Support role" },
  { icon: "fa-file", title: "CNA", tone: "Care support" },
  { icon: "fa-file-text-o", title: "Home Health Aid", tone: "Daily assistance" },
  { icon: "fa-files-o", title: "Physical Therapy", tone: "Rehab role" },
  { icon: "fa-file-text", title: "Occupational Therapy", tone: "Functional support" },
  { icon: "fa-file", title: "Speech Therapy", tone: "Communication care" },
  { icon: "fa-file-text-o", title: "MSW", tone: "Social work" },
];

export default function ApplicationCard({ onApply }) {
  return (
    <div className={styles.applicationCard}>
      <div className={styles.applicationHero}>
        <div className={styles.applicationBadge}>
          <i className="fa fa-briefcase" aria-hidden="true"></i>
          <span>Open roles</span>
        </div>
        <div className={styles.applicationTitle}>Application forms</div>
        <div className={styles.applicationCopy}>
          Pick a role and move into the next step with a clean, guided flow.
        </div>
      </div>

      <div className={styles.applicationGrid}>
        {applicationItems.map((item) => (
          <div className={styles.applicationFormCard} key={item.title}>
            <div className={styles.applicationFormIcon}>
              <i className={`fa ${item.icon}`} aria-hidden="true"></i>
            </div>
            <div className={styles.applicationFormContent}>
              <div className={styles.applicationFormRole}>{item.title}</div>
              <div className={styles.applicationFormTone}>{item.tone}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.applicationButtonContainer}>
        <button onClick={onApply} className={styles.applicationButton}>
          Apply now
        </button>
        <div className={styles.applicationFormElastic}>
          <div className={styles.lineUp}>
            <i className="fa fa-hand-o-up fa-flip "></i>
            <span>Open an application form</span>
          </div>
        </div>
      </div>
    </div>
  );
}
