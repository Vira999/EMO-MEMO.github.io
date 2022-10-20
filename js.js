const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let boardLocked = false;
let firstCard, secondCard;
const resultDisplay= document.querySelector(`result`);
const flipCard = e =>{
  if (boardLocked) return;

const target= e.target.parentElement;
if (target === firstCard) return;

target.classList.add("flip");

if (!hasFlippedCard) {
  hasFlippedCard = true;
  firstCard= target;
  
}else{
  hasFlippedCard = false;
  secondCard= target;
  

  checkForMatch();
 
}
};


checkForMatch = ()=>{
  const isEqual =firstCard.dataset.framework === secondCard.dataset.framework
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
     
  } else{
    unflipCard();
   
  }
  resultDisplay.textContent = cardsWon.lenght
    if(cardsWon.lenght===cards.lenght/2){
      resultDisplay.textContent = `Congratulation! You found them all!`
    }
  /*isEqual? disableCards():unflipCard();*/

  
};
const disableCards = () =>{
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  
};
const unflipCard= ()=> {
  boardLocked = true;
  setTimeout(()=>{
    firstCard.classList.remove(`flip`);
    secondCard.classList.remove(`flip`);
    resetBoard();
  }, 1000);

};
const resetBoard = () =>{
 hasFlippedCard = boardLocked = false;
 firstCard = secondCard = null;
 
};
cards.forEach(card=> {
  card.addEventListener("click", flipCard);
  const randomIndex = 
 Math.floor(Math.random()*cards.length);
 card.style.order = randomIndex;
});