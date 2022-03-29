const diceButton = document.getElementById('dice');
const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');

document.addEventListener('DOMContentLoaded', rollDice, false);
diceButton.addEventListener('click', rollDice, false);
function rollDice(){
    fetch('https://api.adviceslip.com/advice').then(function(response){
        if(response.ok){
            return response.json();
        }
    }).then(function(data){
        adviceId.innerHTML=`Advice #${data.slip.id}`;
        adviceText.innerHTML=`“${data.slip.advice}”`;
    }).catch(function(error){
        console.error("il y a eu un problème avec la requete: "+error.message);
    });
}