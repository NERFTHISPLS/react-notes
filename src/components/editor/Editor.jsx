import MDEditor from '@uiw/react-md-editor';

import { useNotes } from '../../contexts/notes/useNotes';

const PLACEHOLDER_TEXT = 'Start typing your note...';

function Editor() {
  const { currentNote, changeNote } = useNotes();

  return (
    <MDEditor
      value={currentNote.content}
      onChange={newContent => changeNote('content', newContent)}
      visibleDragbar={false}
      textareaProps={{ placeholder: PLACEHOLDER_TEXT }}
    />
  );
}

export default Editor;
