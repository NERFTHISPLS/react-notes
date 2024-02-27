import Header from './Header';
import NotesList from './NotesList';
import EmptyListIcon from './EmptyListIcon';
import LearningPurposeText from './LearningPurposeText';

import { useNotes } from '../../contexts/notes/useNotes';

import styles from './Menu.module.css';

function Menu() {
  const { notes } = useNotes();
  const isNotesListEmpty = notes.length === 0;

  return (
    <section className={styles.menu}>
      <Header />
      {isNotesListEmpty ? <EmptyListIcon /> : <NotesList />}
      <LearningPurposeText />
    </section>
  );
}

export default Menu;
