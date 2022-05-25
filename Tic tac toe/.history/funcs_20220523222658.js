function playerConfig(){
    document.getElementById('curtain').style.display = 'block';
    document.getElementById('playerinfo').style.display = 'block';
    playerserial = 1;
   
}
function player2Config(){
    document.getElementById('curtain').style.display = 'block';
    document.getElementById('playerinfo').style.display = 'block';
    playerserial = 2;
   
}
function closeplayerconfig(){
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';
}
function playernamelog(){
    
    if (playerserial == 1){
        document.getElementById('player1-name').innerText = document.getElementById('pname').value;
        document.getElementById('pname').value = '';
    }
    else{
        document.getElementById('player2-name').innerText = document.getElementById('pname').value;
        document.getElementById('pname').value = '';
    }
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';

}
function startgame(){
    if ( document.getElementById('player1-name').innerText != 'Player Name' && document.getElementById('player2-name').innerText != 'Player Name'){
    document.getElementsByClassName('game-board')[0].style.display = 'grid';
    document.getElementById('current-player').style.display = 'block';
    
}
    else{
        alert("Please enter the names of the player's first ")
    }
}
function playerturn(){
    
    if (turn%2 === 0 ){
        document.getElementById('current-player').innerText = document.getElementById('player1-name').innerText;
        turn++;
    }
    else{
        document.getElementById('current-player').innerText = document.getElementById('player2-name').innerText;
        turn++;
    }
    
    
}


function insertsymbols(clicked_id){
    
    if(turn%2 === 0){
        document.getElementById(clicked_id).innerText = "X";
        if (clicked_id<3){
            game_arr[0][clicked_id] = 0;
        }
        else if (clicked_id > 2 && clicked_id < 5){
            game_arr[1][clicked_id] = 0;
        }
        else {
            game_arr[2][clicked_id] = 0;
        }
        
    }
    else{
        document.getElementById(clicked_id).innerText = "O";
        
        if (clicked_id<3){
            game_arr[0][clicked_id] = 1;
        }
        else if (clicked_id > 2 && clicked_id < 5){
            game_arr[1][clicked_id] = 1;
        }
        else {
            game_arr[2][clicked_id] = 1;
        }
        
    }
    console.log(turn);
    playerturn();
       
}
