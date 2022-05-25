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
function playernamelog(){
    
        document.getElementById('player1-name').innerText = document.getElementById('pname').value;
    
    
   
    document.getElementById('curtain').style.display = 'none';
    document.getElementById('playerinfo').style.display = 'none';

}
