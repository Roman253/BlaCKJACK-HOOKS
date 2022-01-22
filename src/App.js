import './App.css';
import {useState} from "react";

function randomCard () {
    let deck = 12;
    return Math.floor(Math.random() * (deck - 1)) + 1;
};

function winnerPlayer(value){
  if (value > 21) { 

    return 'lost';
  }
  if (value === 21) { return 'Black Jack!!';}
  /*if (value < 21 && dealerHand[1] === false ) {return 'another card or stand?'}
  if (value < 21 && dealerHand[1] === true && dealerHand[1] < value ) {return 'You Won!'}
  if (value < 21 && dealerHand[1] === true && dealerHand[1] > value ) {return 'You lost'}*/
}

function summery(...arr){
  return arr.reduce((curr, next) => Number(curr) + Number(next));
}

function computerScore() {
  const score = Math.floor(Math.random() * (23 - 17) + 17);
  return score;
}





function App() {    
    const [myHand, updateMyHand] = useState([randomCard ()]);
    const onClick = () => {
        updateMyHand( arr => [...arr, `${randomCard()}`]);
    };
    let count='';

    const [dealerHand, updateDealerHand] = useState([randomCard ()]);
    
    const onClickDealer = () => {
      updateDealerHand( arr => [...arr, `${Math.floor(Math.random() * (24 - 17) + 17)}`]);

    };
    
    
    return (
      <>
        <h1>Lets play BlackJack</h1>
        <h2>Your hand:</h2> 
        <div>
          {myHand.map( e => (count=count+e, 
            <div> your card {""} {count} {""} sum:{""}
                  {myHand.reduce((curr, next) => Number(curr) + Number(next))} 
            </div>
          ))}
          {winnerPlayer(myHand.reduce((curr, next) => Number(curr) + Number(next)))}

        </div>
        
        <input type="button" onClick = { onClick } value="Hit" />

        <h2>Dealer hand:</h2> 

        <input type="button" onClick = { onClickDealer } value="Stand" />
        <div> 
          {
          dealerHand[1] ? <>{dealerHand[1]} </> : <> {dealerHand[0]}</>
          }
        </div>
      </>
    );
}

export default App;