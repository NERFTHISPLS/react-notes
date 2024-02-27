import { NOTE_NO_TITLE_REPLACER } from './constants';
import { NOTE_NO_TEXT_CONTENT_REPLACER } from './constants';

export function formatNoTitle(noteTitle) {
  if (!noteTitle) return NOTE_NO_TITLE_REPLACER;

  return noteTitle;
}

export function formatNoContent(noteContent) {
  if (!noteContent) return NOTE_NO_TEXT_CONTENT_REPLACER;

  return noteContent;
}

export function formatNoteDate(noteDate) {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(noteDate);
}
