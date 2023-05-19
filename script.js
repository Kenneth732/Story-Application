document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    userInput();
});

let userInput = () => {
    let person1Input = document.querySelector("#person1Input").value;
    let person2Input = document.querySelector("#person2Input").value;
    let animalInput = document.querySelector("#animalInput").value;
    let exclamationInput = document.querySelector("#exclamationInput").value;
    let verbInput = document.querySelector("#verbInput").value;
    let nounInput = document.querySelector("#nounInput").value;
    
  if (person1Input === '' || person2Input === '' || animalInput === '' || exclamationInput === '' || verbInput === '' || nounInput === '') {
    return console.log('Please enter a value');
  }else {
    acceptData(person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput)
  }
};

let acceptData = (person1, person2, animal, exclamation, verb, noun) =>{
    document.querySelector("span#person1a").innerText = person1;
    document.querySelector("span#person1b").innerText = person1;
    document.querySelector("span#person1c").innerText = person1;
    document.querySelector("span#person2a").innerText = person2;
    document.querySelector("span#person2b").innerText = person2;
    document.querySelector("span#animal").innerText = animal;
    document.querySelector("span#verb").innerText = verb;
    document.querySelector("span#noun").innerText = noun;
    document.querySelector("span#exclamation").innerText = exclamation;

    document.querySelector("div#story").removeAttribute('class')
};