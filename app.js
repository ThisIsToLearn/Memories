const cardArray= [
    {
        name:'bootstrap',
        img: 'images/Bootstrap.png',
    },
    {
        name: 'java', 
        img: 'images/java.png',
    },
    {
        name: 'javascript', 
        img: 'images/JavaScript-logo.png',
    },
    {
        name: 'php', 
        img: 'images/php-logo.png',
    },
    {
        name: 'react', 
        img: 'images/React-icon.png',
    },
    {
        name: 'mysql', 
        img: 'images/sql.png',
    },
    {
        name:'bootstrap',
        img: 'images/Bootstrap.png',
    },
    {
        name: 'java', 
        img: 'images/java.png',
    },
    {
        name: 'javascript', 
        img: 'images/JavaScript-logo.png',
    },
    {
        name: 'php', 
        img: 'images/php-logo.png',
    },
    {
        name: 'react', 
        img: 'images/React-icon.png',
    },
    {
        name: 'mysql', 
        img: 'images/sql.png',
    },
]

cardArray.sort(()=> 0.5 - Math.random());


const grid = document.querySelector('#grid')
const score = document.querySelector('#score')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
 
 function createBoard(){
    for (let i=0; i<12; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/error.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
 }
 createBoard()

 function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards);
    console.log('check for match!');
    if(optionOneId == optionTwoId){
        alert ('You have clicked the same image! Try again')
        cards[optionOneId].setAttribute('src', 'images/error.png')
        cards[optionTwoId].setAttribute('src', 'images/error.png')
    }
    else if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
   
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/error.png')
        cards[optionTwoId].setAttribute('src', 'images/error.png')
        alert('Sorry! Try again')
    }     
    
    score.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        score.innerHTML = 'Good Job, You nailed it! '
    }
}

 function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout( checkMatch, 500)
    }
 }