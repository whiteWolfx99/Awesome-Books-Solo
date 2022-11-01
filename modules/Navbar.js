const Navbar = () => {
  const listb = document.getElementById('list-b');
  const addnewb = document.getElementById('addnew-b');
  const contactb = document.getElementById('Contact-b');
  const closebook = document.getElementById('showbookclose');
  const closeaddbook = document.getElementById('addbooksclose');
  const closecontact = document.getElementById('contactclose');

  listb.addEventListener('click', () => {
    closebook.classList.remove('hidden');
    closeaddbook.classList.add('hidden');
    closecontact.classList.add('hidden');
    listb.classList.add('active');
    addnewb.classList.remove('active');
    contactb.classList.remove('active');
  });

  addnewb.addEventListener('click', () => {
    closebook.classList.add('hidden');
    closeaddbook.classList.remove('hidden');
    closecontact.classList.add('hidden');
    listb.classList.remove('active');
    addnewb.classList.add('active');
    contactb.classList.remove('active');
  });

  contactb.addEventListener('click', () => {
    closebook.classList.add('hidden');
    closeaddbook.classList.add('hidden');
    closecontact.classList.remove('hidden');
    listb.classList.remove('active');
    addnewb.classList.remove('active');
    contactb.classList.add('active');
  });
}

export default Navbar;