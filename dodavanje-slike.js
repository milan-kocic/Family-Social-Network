import { addNewPictures } from './script.js';

// const imageURL = document.getElementById('picture-url').value;
// const imageDescription = document.getElementById('picture-description').value;
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', addPicture);

const search = window.location.search;
const part = search.split('=');
const id = part[1];

async function addPicture(e) {
  e.preventDefault();
  const imageURL = document.getElementById('picture-url').value;
  const imageDescription = document.getElementById('picture-description').value;
  const profilPicture = document.getElementById('profilna-slika').checked;
  await addNewPictures(imageURL, imageDescription, id, 0, profilPicture);
  window.open(`profilkorisnika?id=${id}`, '_self');
}
