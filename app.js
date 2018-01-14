var scores, scores2, roundScores, activePlayer, gamePlaying, rolls, twoSixes, roll2, twoSixes2;

init();
rolls = [];
roll2 = [];

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if (gamePlaying){
        //1. Random Number
        var dice = Math.round(Math.random() * 5 + 1);
        var dice2 = Math.round(Math.random() * 5 + 1);
        dice2 = 6;
        
        rolls.push(dice);
        roll2.push(dice2);
        twoSixes = rolls.slice(-2);
        twoSixes2 = roll2.slice(-2);
        
        //2. display result
        var diceDom = document.querySelector('.dice');
        var diceDom2 = document.querySelector('.dice2');
               
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        diceDom2.style.display = 'block';
        diceDom2.src = 'dice-' + dice2 + '.png';
    
        //3. update round score if rolled number is not a 1.
        if (dice !==  1 && dice2 !== 1) {
            //Add Score
            roundScores += dice;
            roundScores += dice2;
            
            document.getElementById('current-' + activePlayer).textContent = roundScores;
            if ((dice === 6) && (dice2 === 6)) {
                console.log(rolls.slice(-10));
                console.log(roll2.slice(-10));
                roundScores = 0;
                document.querySelector('#score-'+activePlayer).textContent = roundScores;
                document.querySelector('.dice2').src = 'dice-6.png';
                nextPlayer();
            }
        } else {
            //Next Player
            nextPlayer(); 
        }
    }
}); 

 document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
            //Add current score to global score
     scores[activePlayer] += roundScores;
     console.log(scores); 
     
    //update the UI
     document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
          
    //check if player won the game
      if (scores[activePlayer] >= document.getElementById('winValue').value) {
          document.querySelector('#name-'+activePlayer).innerHTML = '<strong>'+'Winner!!'+'</strong>';
        
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.dice2').style.direction = 'none';
        
          document.querySelector('body > div > div.player-'+activePlayer+'-panel').classList.toggle('active');
        
          document.querySelector('.player-1-panel').classList.add('winner');
          document.querySelector('.player-0-panel').classList.add('winner');
          document.querySelector('#name-'+activePlayer).classList.add('winner-done');
          
           gamePlaying = false;
      } else {
          //next player
          nextPlayer(); 
      } 
    }
 });

 function nextPlayer() {
     
     roundScores = 0;
     
     document.getElementById('current-'+activePlayer).textContent = '0';
     
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active'); 
     
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

//     document.querySelector('.dice').style.display = 'none';
//     document.querySelector('.dice2').style.display = 'none';
 }  

 document.querySelector('.btn-new').addEventListener('click', init);

function init() {
scores = [0,0];
roundScores = 0;
activePlayer = 0;
gamePlaying = true;
        
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');    
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}



















