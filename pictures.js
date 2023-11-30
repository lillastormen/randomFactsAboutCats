function fetchPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
        .then((response) => {
            displayCatPicture (response.json());
    })
} 

function displayCatPicture(catPicture) {
  var container = document.getElementById('cat-picture-container');
  var image = document.createElement('img');
  image.src = catPicture.url;
  image.alt = 'Cat Picture';
  container.appendChild(image);
}

fetchPicture();

