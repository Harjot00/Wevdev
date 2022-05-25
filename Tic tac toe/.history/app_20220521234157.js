const player1editbtnele = document.getElementById('player1editbtn');
const player2editbtnele = document.getElementById('player2editbtn');
player1editbtnele.addEventListener('click',playerConfig);
function playerConfig(){
    const playerDatafield = document.getElementById('curtain');
    playerDatafield.display = 'block';
}

