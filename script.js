console.log('Domaci 22');

/****CETVRTI ZADATAK - NASTAVAK********/
console.log('NASTAVAK - ZADATAK 4:');
async function getUsers() {
  const response = await fetch('http://localhost:3000/users', {
    method: 'GET',
  });
  console.log(response);
  const users = await response.json();
  return users;
}

async function getPictures() {
  const response = await fetch('http://localhost:3000/pictures', {
    method: 'GET',
  });
  console.log(response);
  const pictures = await response.json();
  return pictures;
}

async function getUserId(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'GET',
  });
  const userId = await response.json();
  return userId;
}
async function getPictureById(id) {
  const response = await fetch(`http://localhost:3000/pictures/${id}`, {
    method: 'GET',
  });
  const pictureId = await response.json();
  return pictureId;
}

async function getProfilePicture(profPhoto, user) {
  const response = await fetch(
    `http://localhost:3000/pictures?profilePhoto=${profPhoto}&userId=${user}`,
    { method: 'GET' }
  );
  const profilePhoto = await response.json();
  return profilePhoto;
}

async function getUserByCity(city) {
  const response = await fetch(`http://localhost:3000/users?city=${city}`, {
    method: 'GET',
  });
  const userByCity = await response.json();
  return userByCity;
}

async function getByUsernameAndPass(userName, pass) {
  const response = await fetch(
    `http://localhost:3000/users?username=${userName}&password=${pass}`,
    { method: 'GET' }
  );
  const userByUsernameAndPass = await response.json();
  return userByUsernameAndPass;
}

async function getPicturesByUser(userId) {
  const response = await fetch(
    `http://localhost:3000/pictures?userId=${userId}`,
    {
      method: 'GET',
    }
  );
  const picturesOfUser = await response.json();
  return picturesOfUser;
}

async function addNewUser(name, surname, username, password, birthYear, city) {
  const response = await fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      surname,
      username,
      password,
      birthYear,
      city,
    }),
  });
  const user = await response.json();
  return user;
}
async function addNewPictures(image, description, userId, likes, profilePhoto) {
  const response = await fetch(`http://localhost:3000/pictures`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image,
      description,
      userId,
      likes,
      profilePhoto,
    }),
  });
  const newPicture = await response.json();
  return newPicture;
}

async function deletePictureById(id) {
  const response = await fetch(`http://localhost:3000/pictures/${id}`, {
    method: 'DELETE',
  });
  const deletedPicture = await response.json();
  return deletedPicture;
}

async function updateUser(
  id,
  name,
  surname,
  username,
  password,
  birthYear,
  city
) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      surname,
      username,
      password,
      birthYear,
      city,
    }),
  });
  const updateUserInfo = await response.json();
  return updateUserInfo;
}

async function updatePicture(
  id,
  image,
  description,
  userId,
  likes,
  profilePhoto
) {
  const response = await fetch(`http://localhost:3000/pictures/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image,
      description,
      userId,
      likes,
      profilePhoto,
    }),
  });
  const updatePicture = await response.json();
  return updatePicture;
}

// async function loadData() {
//   const users = await getUsers();
//   console.log(users);

//   const userId = await getUserId(12);
//   console.log(userId);

//   const getPicById = await getPictureById(1005);
//   console.log(getPicById);

//   const userByCity = await getUserByCity('Novi Sad');
//   console.log(userByCity);

//   const userByUsernameAndPass = await getByUsernameAndPass(
//     'joca55',
//     'zima1955'
//   );
//   console.log(userByUsernameAndPass);

//   const userPictures = await getPicturesByUser(11);
//   console.log(userPictures);

//   const addUser = await addNewUser(
//     'Milan',
//     'Kocic',
//     'milanKo87',
//     'selicevic7',
//     1987,
//     'Nis'
//   );
//   console.log(addUser);

//   const addPicture = addNewPictures(
//     'https://www.betterteam.com/images/betterteam-best-job-boards-6416x4277-2022095.jpeg?crop=4:3,smart&width=1200&dpr=2',
//     'job photo',
//     12,
//     36
//   );
//   console.log(addPicture);

//   const deletePicture = await deletePictureById(1009);
//   console.log(deletePicture);

//   const updateUserInfo = await updateUser(
//     16,
//     'Miroslav',
//     'Lazarevic',
//     'miki87',
//     'brzi1987',
//     1987,
//     'Petrovac'
//   );
//   console.log(updateUserInfo);

//   const updatePic = await updatePicture(
//     1008,
//     'https://ichef.bbci.co.uk/news/624/mcs/media/images/63032000/jpg/_63032028_jam_ap624.jpg',
//     'photo trafic jam',
//     11,
//     3
//   );
//   console.log(updatePic);
// }

// window.addEventListener('load', loadData);

export {
  getUsers,
  getUserId,
  getPicturesByUser,
  getPictureById,
  getProfilePicture,
  addNewUser,
  getByUsernameAndPass,
  addNewPictures,
  updatePicture,
  getPictures,
  deletePictureById,
};
