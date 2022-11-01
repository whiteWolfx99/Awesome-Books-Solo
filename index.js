import Navbar from './modules/Navbar.js';
import BookClass from './modules/class.js';
import { DateTime } from './modules/luxon.js';

Navbar();

const time = () => {
  const fixtime = { ...DateTime.DATETIME_MED_WITH_SECONDS, month: 'long' };
  return (DateTime.local().toLocaleString(fixtime));
};

setInterval(() => {
  document.querySelector('#localtime').textContent = time();
}, 250);

const storagebook = new BookClass();
storagebook.showbooks();

document.getElementById('submit').addEventListener('click', storagebook.addbook);
