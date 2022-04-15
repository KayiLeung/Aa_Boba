import {initCtx, CupSize, Boba} from  "./scripts/storefront.js";
import {Game} from "./scripts/game";
import { AdvanceGame} from './scripts/advance_game';
import monkeys from './Monkeys-Spinning-Monkeys.mp3';
import lnin from './LI-In-Bug.png'

const ctx = initCtx('canvas', 700, 700);
const g = new Game(ctx);
const ag = new AdvanceGame(ctx);
const cup = new CupSize(ctx);
const playMusic = new PlayMusic(monkeys);



const gameStart = document.getElementById('gameStart');
const advanceGameStart = document.getElementById('advanceGameStart');
const dialog = document.getElementById('sth');
const restart = document.getElementById('restartGame');
const audio = document.getElementById('music');

gameStart.addEventListener('click' , function(e){
    g.start();
    dialog.close();
})

advanceGameStart.addEventListener('click', function(e) {
    ag.start();
    dialog.close();
})

restart.addEventListener('click', function(e){
    g.start();
})



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
