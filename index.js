var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = '';
var enemyOpt= '';
var playerCountWin = 0;
var enemyCountWin = 0;




function winValidate(){

    const result = document.querySelector('.result');

    if(playerOpt == "papel"){       
        if(enemyOpt == "papel"){
            //Empate
            result.innerHTML = "Empate";
        }else if(enemyOpt == "tesoura"){
            //enemy win
            result.innerHTML = "Enemy Win";
            enemyCountWin = enemyCountWin + 1;
        }else if(enemyOpt == "pedra"){
            //player win
            result.innerHTML = "Player Win";
            playerCountWin = playerCountWin + 1;
        }
    }
    if(playerOpt == "pedra"){
        if(enemyOpt == "papel"){
            //enemy win
            result.innerHTML = "Enemy Win";
            enemyCountWin = enemyCountWin + 1;
        }else if(enemyOpt == "tesoura"){
            //player win
            result.innerHTML = "Player Win";
            playerCountWin = playerCountWin + 1;
        }else if(enemyOpt == "pedra"){
            //empate
            result.innerHTML = "Empate";
        }
    }
    if(playerOpt == "tesoura"){
        if(enemyOpt == "papel"){
            //player win
            result.innerHTML = "Player Win";
            playerCountWin = playerCountWin + 1;
        }else if(enemyOpt == "tesoura"){
            //empate
            result.innerHTML = "Empate";
        }else if(enemyOpt == "pedra"){
            //enemy win
            result.innerHTML = "Enemy Win";
            enemyCountWin = enemyCountWin + 1;
        }
    }
}

function resetOpacityEnemy(){
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for(var i = 0; i < enemyOptions.length; i++){
        
         enemyOptions[i].style.opacity = 0.3;
        
    }
}

function enemyPlay(){
    let rand = Math.floor(Math.random() * 3);

    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    resetOpacityEnemy();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].style.opacity = 1;

            enemyOpt = enemyOptions[i].getAttribute('opt');
        }
    }

    winValidate();

    const playerWin = document.querySelector(".wins-player");
    playerWin.innerHTML = `Player Wins: ${playerCountWin}`;

    const enemyWin = document.querySelector(".wins-enemy");
    enemyWin.innerHTML = ` Enemy Wins: ${enemyCountWin}`;


}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
       elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        enemyPlay();
    })
}
