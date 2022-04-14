
const ctx = initCtx('canvas', 700, 700);


function initCtx(canvasId, height, width){
    const canvasEle = document.getElementById(canvasId)
    canvasEle.width = width;
    canvasEle.height = height;
    const ctx = canvasEle.getContext('2d');
    return ctx;
}

function CupSize(ctx) {
    const taro = '#bc80ea';
    const milkTea = '#c48211';
    const matcha = '#3d6e0f';
    this.draw = function(drinkColor) {
        let c = null;
        switch (drinkColor) {
            case 'TARO':
                c = taro;
                break;
            case 'MILKTEA':
                c = milkTea;
                break;
            case 'MATCHA':
                c = matcha;
                break;
            default:
                c = 'white'
        }

        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(595, 85);
        ctx.lineTo(445, 85);
        ctx.stroke();
        ctx.closePath();
        
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(520, 185, 50, 0, Math.PI, false);
        ctx.lineTo(470, 90);
        ctx.lineTo(570, 90);
        ctx.lineTo(570, 185);
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = c;
        ctx.fill();

        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(520, 35);
        ctx.lineTo(520, 85);
        ctx.stroke();
        ctx.closePath();
        
    }
    this.reset = function(){
        ctx.fillStyle = "7ec4cf";
        ctx.fillRect(350, 250, 150, 150);
    }
}

function Boba (ctx) {
    let x = 200;
    let y = 300;
    this.draw = function(x,y) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2, true);
        ctx.fillStyle = 'black';
        ctx.fill();
    }
}






export { initCtx, CupSize, Boba};