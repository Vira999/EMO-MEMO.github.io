function checkForMatch() {
    let cards = document.querySelectorAll(`img`) 
    const optionOneId= cardChosenId[0];
    const optionTwoId =  cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]){
      alert(`You found a match`)
      cards[optionOneId].setAttribute(`src`, `/images/que_icon.svg`)
      cards[optionTwoId].setAttribute(`src`, `/images/que_icon.svg`)
      cardsWon.push(cardChosen)

    }else {
      cards[optionOneId].setAttribute(`src`, `/images/que_icon.svg`)
      cards[optionTwoId].setAttribute(`src`, `/images/que_icon.svg`)
      alert(`Sorry try again`)
    }
    cardChosen[0]
    cardChosenId[0]
    resultDisplay.textContent = cardsWon.lenght
    if(cardsWon.lenght===cardsArray.lenght/2){
      resultDisplay.textContent = `Congratulation! You found them all!`
    }
  }