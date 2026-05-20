import styles from "../layout.module.css";

export default function AlternatingServices({ rows }) {
  return (
    <div className={styles.serviceSequence}>
      {rows.map((row, index) => (
        <section
          key={`${row.tag}-${index}`}
          className={`${styles.serviceRow} ${
            index % 2 === 1 ? styles.serviceRowReverse : ""
          }`}
        >
          <div className={styles.serviceMedia}>
            <img src={row.image} alt={row.alt} className={styles.serviceMediaImg} />
            <div className={styles.serviceMediaShade} />
            <div className={styles.serviceMediaTag}>{row.tag}</div>
          </div>
          <div className={styles.servicePanel}>
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
