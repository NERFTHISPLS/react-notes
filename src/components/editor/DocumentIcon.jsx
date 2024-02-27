import styles from './DocumentIcon.module.css';

function DocumentIcon() {
  return (
    <div className={styles.emptyPageContainer}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        description
      </span>

      <p className={styles.emptyPageText}>Create or select a note...</p>
    </div>
  );
}

export default DocumentIcon;
