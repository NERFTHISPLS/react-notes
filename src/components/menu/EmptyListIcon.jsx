import styles from './EmptyListIcon.module.css';

function EmptyListIcon() {
  return (
    <div className={styles.emptyListContainer}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        format_list_bulleted
      </span>

      <p className={styles.emptyListText}>Create your first note</p>
    </div>
  );
}

export default EmptyListIcon;
