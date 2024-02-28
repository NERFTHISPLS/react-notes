import NotesListItem from './NotesListItem';

import { useNotes } from '../../contexts/notes/useNotes';

import styles from './NotesList.module.css';

function NotesList({ setIsMobileMenuOpen }) {
  const { notes } = useNotes();

  return (
    <ul className={styles.notesList}>
      {notes.map(note => (
        <NotesListItem
          note={note}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          key={note.id}
        />
      ))}
    </ul>
  );
}

export default NotesList;
