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
        

    }
    else{
        document.getElementById('player2-name').innerText = document.getElementById('pname').value;
    }
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';

}
