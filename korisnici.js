import { getUsers } from './script.js';
let users = [];

async function loadData() {
  users = await getUsers();
  console.log(users);
  showUsers(users);
  showCityOptions(users);
}
function showUsers(users) {
  const table = document.querySelector('#table');
  table.innerHTML = '';
  for (let i = 0; i < users.length; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    let td1 = document.createElement('td');
    td1.innerHTML = users[i].name;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.innerHTML = users[i].surname;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.innerHTML = users[i].username;

    let td4 = document.createElement('td');
    //td4.innerHTML = users[i].password;
    td4.innerHTML = '******';
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.innerHTML = users[i].birthYear;
    tr.appendChild(td5);

    let td6 = document.createElement('td');
    td6.innerHTML = users[i].city;
    tr.appendChild(td6);
  }
}

function showCityOptions(users) {
  const city = document.getElementById('select-city');
  for (let user of users) {
    const option = document.createElement('option');
    option.innerHTML = user.city;
    option.value = user.city;
    city.appendChild(option);
  }
}

const btnFilter = document.getElementById('filter');
btnFilter.addEventListener('click', filter);

async function filter() {
  const city = document.querySelector('select').value;

  const filteredUsers = users.filter((users) => users.city === city);
  //const filteredUsers = users.filter((users) => users.city == city);
  showUsers(filteredUsers);
  if (city === 'all') {
    showUsers(users);
  }
}

window.addEventListener('load', loadData);

// function showCategories(categories) {
//   const select = document.getElementById('select-category')
//   // za svaku kategoriju crtamo po jedan option selectu
//   for (let i = 0; i < categories.length; i++) {
//       // categories[i] - jedna kategorija (jedan objekat)
//       const option = document.createElement('option')
//       option.innerHTML = categories[i].name
//       option.value = categories[i].id
//       select.appendChild(option)
//   }
// }
