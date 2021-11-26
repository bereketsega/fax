// Generates a random fact 
async function generateRandomFact() {
    const response = await (await fetch("https://uselessfacts.jsph.pl/random.json?language=en")).json();
    const randFact = response.text;
    document.getElementById("rand-fact-text").innerHTML = randFact;
    
}
generateRandomFact();
