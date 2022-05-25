function playerConfig(){
    document.getElementById('curtain').style.display = 'block';
    document.getElementById('playerinfo').style.display = 'block';
   
}
function player2Config(){
    document.getElementById('curtain').style.display = 'block';
    document.getElementById('playerinfo').style.display = 'block';
   
}
function closeplayerconfig(){
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';
}
function playernamelog(playerserial){
    if(playerserial === 1){
        document.getElementById('player1-name').innerText = document.getElementById('pname').value;
    }
    else{
        document.getElementById('player2-name').innerText = document.getElementById('pname').value;
    }
   
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';

}
