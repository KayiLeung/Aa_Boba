function Milktea(name, color){
    this.name = name;
    this.color = color;
}

function CupSize(name, size, color) {
    this.name = name;
    this.size = size;
    this.color = color;
}

function Topping(name, color) {
    this.name = name;
    this.color = color;
}

const MILKTEATYPES ={
    TARO: new Milktea('taro', 'purple', 'e'),
    MILKTEA: new Milktea('milktea', '#fff','d'),
    MATCHA: new Milktea('matcha', 'green','c')
};


const CUPSIZES ={
    SMALL: new CupSize('small', 'w'),
    MEDIUM: new CupSize('medium', 's'),
    LARGE: new CupSize('larger', 'x')
};

const TOPPING = {
    BOBA: new Topping('boba', 'black','r'),
    JELLY: new Topping('jelly', 'white','f'),
    EGGPUDDING: new Topping ('eggpudding', 'yellow','v')
};

function Bobas(cupSize,milkTeaType, topping) {
    this.cupSize = cupSize;
    this.milkTeaType = milkTeaType;
    this.topping = topping;
    this.getCupSize = ()=>CUPSIZES[this.cupSize];
    this.getMilkTea = ()=> MILKTEATYPES[this.milkTeaType];
    this.getTopping = ()=>TOPPING[this.topping];
}

function GenerateOrder() {
    function getObjectRandomKey(obj) {

        const keys = Object.keys(obj);
        const r = Math.floor(Math.random() * keys.length);
        const key = keys[r];
        return key;
    };
    return new Bobas(
        getObjectRandomKey(CUPSIZES),
        getObjectRandomKey(MILKTEATYPES),
        getObjectRandomKey(TOPPING),
    );
}

function CurrentOrder(playerSelection) {
    return new Bobas(
        ...playerSelection
    )
}

function isMatching(boba1, boba2) {
    return (boba1.getMilkTea() === boba2.getMilkTea() &&
        boba1.getTopping() === boba2.getTopping() &&
        boba1.getCupSize() === boba2.getCupSize());
}


export { Bobas, GenerateOrder, CurrentOrder, isMatching, MILKTEATYPES, CUPSIZES, TOPPING }
