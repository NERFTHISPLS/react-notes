import Menu from '../menu/Menu';
import Main from '../editor/Main';
import { useNotes } from '../../contexts/notes/useNotes';

function AppLayout() {
  const { currentNote } = useNotes();

  return (
    <>
      <Menu />
      <Main key={currentNote?.id} />
    </>
  );
}

export default AppLayout;
