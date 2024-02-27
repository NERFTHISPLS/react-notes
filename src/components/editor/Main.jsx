import { useNotes } from '../../contexts/notes/useNotes';

import TitleInput from './TitleInput';
import Editor from './Editor';
import DocumentIcon from './DocumentIcon';

import styles from './Main.module.css';

function Main() {
  const { currentNote } = useNotes();
  const isNoteSelected = currentNote !== null;

  return (
    <main className={styles.main}>
      {isNoteSelected ? (
        <>
          <TitleInput />
          <Editor />
        </>
      ) : (
        <DocumentIcon />
      )}
    </main>
  );
}

export default Main;
