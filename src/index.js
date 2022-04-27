import {initCtx, CupSize, Boba} from  "./scripts/storefront.js";
import {Game} from "./scripts/game";
import { AdvanceGame} from './scripts/advance_game';
import monkeys from '/dist/Monkeys-Spinning-Monkeys.mp3';


const ctx = initCtx('canvas', 700, 700);
const g = new Game(ctx);
const ag = new AdvanceGame(ctx);
const cup = new CupSize(ctx);
const playMusic = new PlayMusic(monkeys);



const gameStart = document.getElementById('gameStart');
const advanceGameStart = document.getElementById('advanceGameStart');
const egmessage = document.getElementById('endgame_message')
const dialog = document.getElementById('sth');
const restart = document.getElementById('restartGame');
const audio = document.getElementById('music');
const main = document.getElementById('main-menu')

gameStart.addEventListener('click' , function(e){
    g.start();
    dialog.close();
})

advanceGameStart.addEventListener('click', function(e) {
    ag.start();
    dialog.close();
})

restart.addEventListener('click', function(e){
    // g.stop();
    // ag.stop();
    dialog.open = 'true';
    // g.start();
})

main.addEventListener('click', function(e) {
    egmessage.style.zIndex = '-1'
    egmessage.close();
    dialog.open = 'true';
})

function endgameMessage(score) {

    egmessage.open = 'true'
    egmessage.style.zIndex = '1'
    document.getElementById('message').innerText = `You made $${score * 5} today!`;

}
////modal/////

// function endgameMessage(score) {
//     document.getElementById('myModal').style.visibility='visible';
//     document.getElementById("message").innerText = `You earn ${score} today!`;


// }

// var modal = document.getElementById('myModal')
// var span = document.getElementById('close')[0];

// // span.onclick = function() {
// //     modal.style.display = 'none'
// // }

// window.onclick = function (e) {
//     if (e.target == modal) {
//         modal.style.display = 'none'
//     }
// }

/////music//////
function PlayMusic(soundFile) {
    const sound = new Audio(soundFile);
    sound.play();
    let isPlaying = true;

    this.toggle = ()=>{
        if (isPlaying) {
            sound.pause();
            isPlaying = false;
        } else {
            sound.play();
            isPlaying = true;
        }
    }
}

audio.addEventListener('click', ()=>{
    playMusic.toggle();
})

cup.draw();


export {endgameMessage}