import { useEffect, useRef } from 'react';

import { useNotes } from '../../contexts/notes/useNotes';

import { NOTE_NO_TITLE_REPLACER } from '../../utils/constants';

import styles from './TitleInput.module.css';

function TitleInput() {
  const { currentNote, changeNote } = useNotes();
  const inputRef = useRef(null);

  const isUntitled = currentNote.title === NOTE_NO_TITLE_REPLACER;

  useEffect(() => {
    if (isUntitled) {
      inputRef.current.select();
    }
  }, [isUntitled]);

  return (
    <div className={styles.inputContainer}>
      <label htmlFor="title">Note title</label>
      <input
        ref={inputRef}
        id="title"
        type="text"
        placeholder="Note title..."
        value={currentNote.title}
        onChange={e => changeNote('title', e.target.value)}
      />
    </div>
  );
}

export default TitleInput;
