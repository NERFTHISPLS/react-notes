import { v4 as uuidv4 } from 'uuid';

import { useNotes } from '../../contexts/notes/useNotes';

import styles from './Header.module.css';

function Header() {
  const { addNote } = useNotes();

  const handleAddNote = () => {
    const noteId = uuidv4();

    addNote(noteId);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.headingMain}>React Notes</h1>
      <button className={`btn ${styles.addNoteBtn}`} onClick={handleAddNote}>
        <span className="material-symbols-outlined">note_add</span>
      </button>
    </header>
  );
}

export default Header;
