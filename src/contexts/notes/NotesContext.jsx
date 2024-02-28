import { createContext, useReducer } from 'react';

export const NotesContext = createContext();

const isLocalStorageEmpty = localStorage.getItem('notes') === null;

const initialState = {
  notes: isLocalStorageEmpty
    ? []
    : JSON.parse(localStorage.getItem('notes'), (key, value) => {
        if (key === 'date') return new Date(value);

        return value;
      }),

  currentNote: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'note/selected':
      return {
        ...state,
        currentNote: action.payload,
      };

    case 'note/deleted':
      return {
        ...state,
        notes: action.payload.updatedNotes,
        currentNote: action.payload.isDeletedNoteCurrent
          ? null
          : state.currentNote,
      };

    case 'note/titleChanged':
    case 'note/contentChanged':
      return {
        ...state,
        currentNote: action.payload.updatedNote,
        notes: action.payload.updatedNotes,
      };

    case 'note/added':
      return {
        ...state,
        currentNote: action.payload.newNote,
        notes: action.payload.updatedNotes,
      };

    default:
      throw new Error('Unknown action type of the notes reducer!');
  }
}

export function NotesProvider({ children }) {
  const [{ notes, currentNote }, dispatch] = useReducer(reducer, initialState);

  const changeNote = (key, updatedText) => {
    const updatedNote = {
      ...currentNote,
      [key]: updatedText,
      date: new Date(),
    };

    const updatedNotes = notes
      .map(note => (note.id === updatedNote.id ? updatedNote : note))
      .sort((a, b) => b.date - a.date);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    const dispatchType =
      key === 'title'
        ? 'note/titleChanged'
        : key === 'content'
        ? 'note/contentChanged'
        : '';

    dispatch({
      type: dispatchType,
      payload: { updatedNote, updatedNotes },
    });
  };

  const selectNote = id => {
    const selectedNote = notes.find(note => note.id === id);

    dispatch({
      type: 'note/selected',
      payload: selectedNote,
    });
  };

  const deleteNote = (e, id) => {
    // Otherwise there will be 'note/selected' event
    e.stopPropagation();

    const updatedNotes = notes.filter(note => note.id !== id);
    const isDeletedNoteCurrent = currentNote?.id === id;

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    dispatch({
      type: 'note/deleted',
      payload: { updatedNotes, isDeletedNoteCurrent },
    });
  };

  const addNote = id => {
    const newNote = {
      id,
      title: 'Untitled',
      content: '',
      date: new Date(),
    };

    const updatedNotes = [newNote, ...notes];

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    dispatch({
      type: 'note/added',
      payload: { newNote, updatedNotes },
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        currentNote,
        selectNote,
        deleteNote,
        changeNote,
        addNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
