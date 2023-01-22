import { getByUsernameAndPass } from './script.js';

const btnLogIn = document.querySelector('#log-in');

btnLogIn.addEventListener('click', logIn);
async function logIn(e) {
  e.preventDefault();
  const inputUsername = document.getElementById('username').value;
  const inputPassword = document.getElementById('password').value;
  const user = await getByUsernameAndPass(inputUsername, inputPassword);
  if (user.length === 0) {
    document.querySelector('#username').style.border = '5px solid blue';
    document.querySelector('#password').style.border = '5px solid blue';
    alert('Username and passwor are not correct!');
  } else {
    const id = user[0].id;

    window.open(`profilkorisnika?id=${id}`, '_self');
  }
}
