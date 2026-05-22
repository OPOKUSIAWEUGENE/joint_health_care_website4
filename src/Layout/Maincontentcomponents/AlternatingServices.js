import styles from "../layout.module.css";

export default function AlternatingServices({ rows }) {
  return (
    <div className={styles.serviceSequence}>
      {rows.map((row, index) => (
        <section
          key={`${row.tag}-${index}`}
          className={styles.serviceRow}
        >
          <div className={styles.serviceMedia}>
            <div className={styles.serviceMediaCard}>
              <span className={styles.serviceMediaLabel}>Service</span>
              <h3 className={styles.serviceMediaTitle}>{row.tag}</h3>
              <span className={styles.serviceMediaLine} />
              <p className={styles.serviceMediaCopy}>
                Clear, dependable support tailored to this service area.
              </p>
            </div>
          </div>
          <div className={styles.servicePanel}>
            {row.description && (
              <div className={styles.serviceDescription}>
                {row.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {row.groups.map((group, groupIndex) => (
              <div
                key={group.title}
                className={`${styles.serviceGroup} ${
                  groupIndex === 0 ? styles.serviceGroupFirst : ""
                }`}
              >
                <h3 className={styles.serviceGroupTitle}>{group.title}</h3>
                <ul className={styles.serviceGroupList}>
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
