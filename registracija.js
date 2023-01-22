import { addNewUser, getUsers } from './script.js';
const btnAdd = document.querySelector('#sign-up');
btnAdd.addEventListener('click', registerUser);

async function registerUser(e) {
  e.preventDefault();
  const nameInput = document.querySelector('#input-name').value;
  const surnameInput = document.querySelector('#input-surname').value;
  const usernameInput = document.querySelector('#input-username').value;
  const passwordInput = document.querySelector('#input-password').value;
  const birthyearInput = document.querySelector('#input-birthyear').value;
  const cityInput = document.querySelector('#input-city').value;

  // treba bolje uraditi validaciju
  if (
    nameInput == '' ||
    surnameInput == '' ||
    usernameInput == '' ||
    passwordInput == '' ||
    birthyearInput == '' ||
    cityInput == ''
  ) {
    document.querySelector('#input-name').style.border = '5px solid blue';
    return;
  }
  const korisnici = await getUsers();

  const kor = korisnici.find((korisnik) => usernameInput === korisnik.username); //ako pronadje isto korisnicko ime vraca find, zato navodimo
  //sledeci uslov: ako nije undefined
  if (kor != undefined) {
    alert('Username already exists.');
    return;
  }
  korisnici.find((korisnik) => {
    if (usernameInput === korisnik.username) {
      alert('Username already exists.');
      return;
    }
  });

  await addNewUser(
    nameInput,
    surnameInput,
    usernameInput,
    passwordInput,
    birthyearInput,
    cityInput
  );
  window.open(`prijava-korisnika.html`, '_self');
}

//MLADENOVA POMOĆ ZA FIND
// I nacin
// korisnici = await getUsers();
// find iskoristis samo za pronalazenje korisnika sa tim username-om
// za onaj element niza za koga callback fja u find vrati true, njega vraca find
// najcesce se samo uslov pise u telu callback fje
// kod ovih fja (find, filter, map...) nikad ne treba u callback alert, i return u callback ti izlazi iz callback ne iz cele spoljasnje fje
// const kor = korisnici.find((korisnik) => usernameInput === korisnik.username); // ovo vraca korisnika i mi ga smestamo u promenljivu kor
// ako ne postoji korisnik sa tim korisnickim imenom, find vraca undefined
// ako postoji, find vraca pronadjenog korisnika (razlicito od undefined)
// if (kor != undefined) {
// 	alert('Username already exists.');
// 	return;
// }
// ... upis u bazu itd...

// II nacin
// mogao si da napises fju u src koja poziva endpoint koji vraca korisnike po username-u
// const korisnici = await getUsersByUserName(usernameInput);
// ova fja vraca niz pronadjenih, ako postoji korisnik sa tim korisnickim imenom vratice niz sa jednim elementom
// ako ne postoji, vratice prazan niz
// if (korisnici.length > 0) { // ako je duzina vracenog niza veca od 0, znaci da korisnik postoji
// 	alert('Username already exists.');
// 	return;
// }
// ... upis u bazu itd...
