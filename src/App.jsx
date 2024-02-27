import AppLayout from './components/ui/AppLayout';

import { NotesProvider } from './contexts/notes/NotesContext';

function App() {
  return (
    <NotesProvider>
      <AppLayout />
    </NotesProvider>
  );
}

export default App;
