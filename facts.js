const baseUrl ='https://catfact.ninja';

const fetchFact= async () => {
	const response = await fetch(baseUrl + '/fact?max_length=140');
    const fact = await response.json();
	displayCatFacts(fact);
}

function displayCatFacts(catFact) {
    var container = document.getElementById('cat-fact-container');

    var paragraph = document.createElement('p');
    paragraph.textContent = catFact.fact; 
    container.appendChild(paragraph);
}

fetchFact();