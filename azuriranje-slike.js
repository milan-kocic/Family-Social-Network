import { updatePicture, getPicturesByUser, getPictureById } from './script.js';

const btnUpdate = document.getElementById('btn-update');

btnUpdate.addEventListener('click', updatePic);

const search = window.location.search;
const part = search.split('=');
const id = part[1];

let picture;

// nedostajalo je popunjavanje inputa sa podacima o toj slici prilikom ucitavanja stranice
async function loadData() {
  picture = await getPictureById(id);
  console.log(picture);
  document.getElementById('picture-url').value = picture.image;
  document.getElementById('picture-description').value = picture.description;
  document.getElementById('profilna-slika').checked = picture.profilePhoto;
}
window.addEventListener('load', loadData);

async function updatePic(e) {
  e.preventDefault();
  const pictureURL = document.getElementById('picture-url').value;
  const pictureDecription = document.getElementById(
    'picture-description'
  ).value;
  const profilePic = document.getElementById('profilna-slika').checked;
  const picture = await getPictureById(id);
  console.log(picture);
  await updatePicture(
    id,
    pictureURL,
    pictureDecription,
    picture.userId,
    picture.likes,
    profilePic
  );
  window.open(`profilkorisnika?id=${picture.userId}`, '_self');
}
