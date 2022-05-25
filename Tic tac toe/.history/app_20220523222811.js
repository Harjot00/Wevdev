let playerserial = null ;
let turn = 0;
let game_arr = [[],[],[]];

const player1editbtnele = document.getElementById('player1editbtn');
const player2editbtnele = document.getElementById('player2editbtn');
player1editbtnele.addEventListener("click",playerConfig);
player2editbtnele.addEventListener("click",player2Config);


const asidebackdrop = document.getElementById('curtain');
asidebackdrop.addEventListener("click",closeplayerconfig);

const cancelbtn = document.getElementById('cancel-btn');
cancelbtn.addEventListener("click",closeplayerconfig);


const confirmbtnele = document.getElementById('confirm-btn');
confirmbtnele.onclick =  playernamelog;

const startgamebtn = document.getElementById('start-btn');
startgamebtn.addEventListener("click",startgame)

for(let i = 0; i <9;i++){
    document.getElementsByClassName('game-li')[i].addEventListener('click', function () {
        insertsymbols(this.id);
      });
    
}
