import { useState } from 'react';

import Header from './Header';
import NotesList from './NotesList';
import EmptyListIcon from './EmptyListIcon';
import LearningPurposeText from './LearningPurposeText';
import MobileMenuButtons from './MobileMenuButtons';

import { useNotes } from '../../contexts/notes/useNotes';

import styles from './Menu.module.css';

function Menu() {
  // there will be a small prop drilling, but I think it's not so bad in this case
  const [isMobileMenuOpened, setIsMobileMenuOpen] = useState(false);
  const { notes } = useNotes();
  const isNotesListEmpty = notes.length === 0;

  return (
    <>
      <MobileMenuButtons
        isMobileMenuOpened={isMobileMenuOpened}
        onMobileMenuClick={setIsMobileMenuOpen}
      />

      <section
        className={`${styles.menu} ${
          isMobileMenuOpened ? styles.mobileMenuOpened : ''
        }`}
      >
        <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
        {isNotesListEmpty ? (
          <EmptyListIcon />
        ) : (
          <NotesList setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
        <LearningPurposeText />
      </section>
    </>
  );
}

export default Menu;
