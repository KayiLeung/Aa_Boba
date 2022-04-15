import { Bobas, GenerateOrder, CurrentOrder, isMatching } from "./boba_items";
import { CupSize, Boba } from "./storefront";
import { MILKTEATYPES, CUPSIZES, TOPPING } from "./boba_items";
import { endgameMessage} from '../index'
import {move} from './util'


function AdvanceGame(ctx) {
    let score = 0;
    let lives = 3;
    let level
    let currentSelection = [null, null, null];
    let target;
    let timeOutId;
    let speedUp;
    let time;
    let session;
    let displayTimeOutId;
    let running = false;
    const newCup = new CupSize(ctx);
    const drawCup = new CupSize(ctx);
    this.start = () => {
        score = 0;
        lives = 3;
        speedUp = 0.9;
        running = true;

        AdvanceRound();
    }
    this.stop = () => {
        running = false;
        clearTimeout(timeOutId);
        timeOutId = null;
        endgameMessage(score);
        score = 0;
        lives = 3;
    }
    this.getRemainingLives = () => lives;

    this.currentScore = () => score;

    this.setSelection = (userSelection) => {
        currentSelection = userSelection;
        checkOrder();
    }

    this.getUserSelection = () => {
        return currentSelection;
    }
    this.currentDrinkImg = (itemSelected) => {
        currentSelectionImg = itemSelected;
    }

    const checkOrder = () => {
        console.log(currentSelection);
        if (currentSelection.every(el => el !== null)) {
            let myDrink = CurrentOrder(currentSelection);
            const r = isMatching(myDrink, target);
            if (r) {
                score += 1;
                level = (Math.floor(score / 5)) + 1;
                time = 11111 * Math.pow(speedUp, level)
                session = 0
                AdvanceRound();
            } else {
                lives -= 1;
                clearTimeout(timeOutId);
                timeOutId = null;
                AdvanceRound();
            }
            currentSelection = [null, null, null];
            if (lives === 0) {
                this.stop();
            }
        }
        document.getElementById('score').innerText = `Today Sales: $${this.currentScore() * 5}`
        this.getRemainingLives(lives);
        document.getElementById('lives').innerText = `Lives remainder: ${this.getRemainingLives(lives)}`
    }


    function AdvanceRound() {
        target = GenerateOrder();
        document.getElementById('orderDisplay').innerText = `NEW ORDER:\n 
                                                            \n- Size: ${target.cupSize} \n
                                                            - Drink: ${target.milkTeaType}\n
                                                            - Topping: ${target.topping}`
        
        
        console.log(time, (Math.pow(speedUp, level)));
        // move(session, time);
        timeOutId = setTimeout(() => {
            checkOrder();
            // move(session, time);
        }, time)
    }

   


    const myCupSize = document.getElementById('cupsize')
    const myDrink = document.getElementById('drink')
    const myTopping = document.getElementById('toppings')

    myCupSize.addEventListener("click", function (e) {
        const keys = new Set(Object.keys(CUPSIZES))
        if (e.target.className && running) {
            if (keys.has(e.target.className.toUpperCase())) {
                currentSelection[0] = e.target.className.toUpperCase();
                checkOrder();
                document.getElementById('label').innerText = `${currentSelection[0]}`
            }
        }
    });
    myDrink.addEventListener("click", function (e) {
        const keys = new Set(Object.keys(MILKTEATYPES))
        if (e.target.className && running) {
            if (keys.has(e.target.className.toUpperCase())) {
                currentSelection[1] = e.target.className.toUpperCase();
                checkOrder();
                drawCup.draw(currentSelection[1]);
            }
        }
    });
    myTopping.addEventListener("click", function (e) {
        const keys = new Set(Object.keys(TOPPING))
        if (e.target.className && running) {
            if (keys.has(e.target.className.toUpperCase())) {
                currentSelection[2] = e.target.className.toUpperCase()
                checkOrder();
                displayTimeOutId = setTimeout(() => {
                    newCup.draw();
                }, 1000)
            }
        }
    })
}


    


export { AdvanceGame }