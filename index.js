import {
  updatePicture,
  getPicturesByUser,
  getPictureById,
  getUsers,
  getPictures,
  deletePictureById,
  getUserId,
} from './script.js';

const allPictures = document.getElementById('all-pictures');

async function loadData() {
  const pictures = await getPictures();
  showPictures(pictures);
}

async function showPictures(pictures) {
  for (let pic of pictures) {
    const divPicture = document.createElement('div');
    allPictures.appendChild(divPicture);
    const image = document.createElement('img');
    divPicture.appendChild(image);
    image.style.width = '250px';
    image.style.height = '200px';
    image.style.border = '4px solid #0088c2';
    divPicture.style.display = 'flex';
    divPicture.style.alignItems = 'center';
    divPicture.style.gap = '15px';
    divPicture.style.padding = '20px';
    image.src = `${pic.image}`;
    const pictureInfo = document.createElement('div');
    divPicture.appendChild(pictureInfo);
    pictureInfo.innerHTML = pic.description;
    const authorInfo = document.createElement('span');
    divPicture.appendChild(authorInfo);
    const userInfo = await getUserId(pic.userId);
    authorInfo.innerHTML = `by ${userInfo.name} ${userInfo.surname}`;
    divPicture.style.border = '3px solid #0088c2';

    const likes = document.createElement('div');
    divPicture.appendChild(likes);
    likes.innerHTML = `Likes: ${pic.likes}`;
    const btnLike = document.createElement('button');
    divPicture.appendChild(btnLike);
    btnLike.id = 'btn-like';
    btnLike.innerHTML = 'Like';
    btnLike.addEventListener('click', async function () {
      const updatedLikes = ++pic.likes;

      likes.innerHTML = `Likes: ${updatedLikes}`;
      await updatePicture(
        pic.id,
        pic.image,
        pic.description,
        pic.userId,
        updatedLikes,
        pic.profilePhoto
      );
    });
  }
}

window.addEventListener('load', loadData);
