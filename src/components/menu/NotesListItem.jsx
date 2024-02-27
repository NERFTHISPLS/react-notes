import { useNotes } from '../../contexts/notes/useNotes';

import {
  formatNoTitle,
  formatNoContent,
  formatNoteDate,
} from '../../utils/helpers';

import {
  NOTE_NO_TEXT_CONTENT_REPLACER,
  NOTE_NO_TITLE_REPLACER,
} from '../../utils/constants';

import styles from './NotesListItem.module.css';

function NotesListItem({ note }) {
  const { currentNote, selectNote, deleteNote } = useNotes();

  const formattedTitle = formatNoTitle(note.title);
  const formattedContent = formatNoContent(note.content);
  const formattedDate = formatNoteDate(note.date);

  const noTextContentClass =
    formattedContent === NOTE_NO_TEXT_CONTENT_REPLACER ? styles.noContent : '';

  const noTitleClass =
    formattedTitle === NOTE_NO_TITLE_REPLACER ? styles.noContent : '';

  const noteActiveClass = currentNote?.id === note.id ? styles.active : '';

  return (
    <li
      className={`${styles.notesListItem} ${noteActiveClass}`}
      onClick={() => selectNote(note.id)}
    >
      <div className={styles.noteInfo}>
        <p className={`${styles.noteTitle} ${noTitleClass}`}>
          {formattedTitle}
        </p>

        <p className={`${styles.noteContent} ${noTextContentClass}`}>
          {formattedContent}
        </p>

        <time className={styles.noteDate} dateTime={note.date}>
          <span>Last update: </span>
          <span>{formattedDate}</span>
        </time>
      </div>

      <button
        className={`btn ${styles.deleteNoteBtn}`}
        onClick={e => deleteNote(e, note.id)}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </li>
  );
}

export default NotesListItem;
