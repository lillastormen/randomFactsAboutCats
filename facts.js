const factUrl ='https://catfact.ninja';

const fetchFact= async () => {
	const response = await fetch(factUrl + '/fact?max_length=140');
    const fact = await response.json();
	displayCatFact(fact);
}

function displayCatFact(catFact) {
    var container = document.getElementById('cat-fact-container');

    var paragraph = document.createElement('p');
    paragraph.textContent = catFact.fact; 
    container.appendChild(paragraph);
}

fetchFact();