function fetchPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
        .then((response) => {
            return response.json();
        }).then(picture => {
            displayCatPicture(picture)
        });
} 

//NOTE use console.log() when something doesn't work

function displayCatPicture(catPicture) {
  var container = document.getElementById('cat-picture-container');
  var image = document.createElement('img');
  image.src = catPicture[0].url; //catPictures is an object with an array of images so need to point towards the first instance of the array
  image.alt = 'Cat Picture';
  container.appendChild(image);
}

fetchPicture();

