import styles from './MobileMenuButtons.module.css';

function MobileMenuButtons({ isMobileMenuOpened, onMobileMenuClick }) {
  return (
    <button
      className={`btn ${styles.menuButtons}`}
      onClick={() =>
        onMobileMenuClick(isMobileMenuOpened => !isMobileMenuOpened)
      }
    >
      {isMobileMenuOpened ? (
        <span className="material-symbols-outlined">close</span>
      ) : (
        <span className="material-symbols-outlined">menu</span>
      )}
    </button>
  );
}

export default MobileMenuButtons;
