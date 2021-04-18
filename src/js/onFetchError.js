import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

export default function onfetchError() {
  error({
    text: 'Too many matches found. Please enter a more spesific query!',
    delay: '2000',
    maxTextHeight: null,
  });
}
