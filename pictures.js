const pictureUrl = 'https://api.thecatapi.com';

const fetchPicture = async () => {
  const response = await fetch(pictureUrl + '/v1/images/search?limit=1');
  const catPicture = await response.json();
  displayCatPicture(catPicture[0]);
}

function displayCatPicture(catPicture) {
  var container = document.getElementById('cat-picture-container');

  var image = document.createElement('img');
  image.src = catPicture.url;
  image.alt = 'Cat Picture';
  container.appendChild(image);
}

fetchPicture();