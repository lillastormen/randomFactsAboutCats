function fetchFact() {
    fetch('https://catfact.ninja/fact?max_length=100&limit=3')
        .then((response) => {
            return response.json();
        }).then(fact => {
            displayCatFact(fact)
        });
} 

function displayCatFact(catFact) {
  const container = document.getElementById('catFactContainer');
  const paragraph = document.createElement('p');
  paragraph.textContent = catFact.fact;
  container.replaceChildren(); 
  container.appendChild(paragraph);
}

fetchFact();

