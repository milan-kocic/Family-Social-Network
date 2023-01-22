import {
  getUserId,
  getPicturesByUser,
  getPictureById,
  getProfilePicture,
  deletePictureById,
} from './script.js';

const search = window.location.search;
const parts = search.split('=');
const id = parts[1];

async function loadData() {
  const user = await getUserId(id);
  console.log(user);
  const picture = await getPicturesByUser(id);
  console.log(picture);
  // const profilPicture = await getPictureById(1005);
  // console.log(profilPicture);
  const profilPhoto = await getProfilePicture(true, id);
  console.log(profilPhoto);
  showUser(user, picture, profilPhoto);
}
window.addEventListener('load', loadData);
function showUser(user, picture, profilPhoto) {
  const name = document.querySelector('.name');
  name.innerHTML = `name: ${user.name}`;

  const surname = document.querySelector('.surname');
  surname.innerHTML = `surname: ${user.surname}`;

  const username = document.querySelector('.username');
  username.innerHTML = `username: ${user.username}`;

  //const password = document.querySelector('.password');
  //password.innerHTML = `password: ${user.password}`;

  const birthYear = document.querySelector('.birth-year');
  birthYear.innerHTML = `birth year: ${user.birthYear}`;

  const city = document.querySelector('.city');
  city.innerHTML = `city: ${user.city}`;

  const photoProfile = document.querySelector('.img');
  // provera da li je prazan niz - provera da li mu je duzina 0
  if (profilPhoto.length === 0) {
    photoProfile.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png';
  } else {
    photoProfile.src = `${profilPhoto[0].image}`;
  }

  const slike = document.querySelector('.slike');
  for (let i = 0; i < picture.length; i++) {
    const divSlika = document.createElement('div');
    slike.appendChild(divSlika);
    divSlika.classList.add('photos-opisi');

    const slika = document.createElement('img');
    divSlika.appendChild(slika);
    slika.src = `${picture[i].image}`;
    slika.style.width = '250px';
    slika.style.height = '200px';

    const opisSlike = document.createElement('div');
    divSlika.append(opisSlike);
    opisSlike.innerHTML = `${picture[i].description}`;
    opisSlike.style.cssText = 'color: white; font-size: 20px;';

    const likeSlike = document.createElement('div');
    divSlika.append(likeSlike);
    likeSlike.innerHTML = `Likes: ${picture[i].likes}`;
    likeSlike.style.cssText = 'color: white; font-size: 21px;';

    const btnDelete = document.createElement('button');
    divSlika.appendChild(btnDelete);
    btnDelete.innerHTML = 'Delete picture';
    btnDelete.id = 'btn-delete';
    btnDelete.addEventListener('click', async function () {
      await deletePictureById(picture[i].id);
      this.parentElement.remove();
    });

    const linkUpdatePicture = document.createElement('a');
    divSlika.appendChild(linkUpdatePicture);
    linkUpdatePicture.href = `azuriranje-slike?id=${picture[i].id}`;
    linkUpdatePicture.innerText = 'Update picture';
    linkUpdatePicture.style = 'margin-right: 0;';
  }
}
const divDodaj = document.getElementById('dodaj-sliku');
const link = document.createElement('a');
divDodaj.appendChild(link);
link.href = `dodavanje-slike?id=${id}`;
link.innerText = 'Dodaj sliku';
