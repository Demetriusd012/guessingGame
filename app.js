//Generate a random number DONE
//Gice the user the ability to guess
//If they guess and they are wrong, ask them again(hint)
//If they win  - say that they won


function guessGame(){
  let fixedNumber= Math.floor(Math.random()* 11);
  let guess;

  do{
    guess=prompt('Guess a number between 1-10');
    if(guess>fixedNumber){
      console.log('Too High');
    } else if(guess<fixedNumber){
      console.log('Too Low');
    }
  }while(guess!=fixedNumber){
    console.log(guess, fixedNumber);
    console.log('Daaaaamn daniel you got it right! More importantly you learned! :)');
  }
}

guessGame();