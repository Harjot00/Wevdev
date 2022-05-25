const player1editbtnele = document.getElementById('player1editbtn');
const player2editbtnele = document.getElementById('player2editbtn');
player1editbtnele.addEventListener("click",playerConfig);
player2editbtnele.addEventListener("click",playerConfig);

const asidebackdrop = document.getElementById('curtain');
asidebackdrop.addEventListener("click",closeplayerconfig);

const cancelbtn = document.getElementById('cancel-btn');
cancelbtn.addEventListener("click",closeplayerconfig);


const confirmbtnele = document.getElementById('confirm-btn');
confirmbtnele.onclick =  playernamelog;
