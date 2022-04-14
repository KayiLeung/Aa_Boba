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
    TARO: new Milktea('taro', 'purple'),
    MILKTEA: new Milktea('milktea', '#fff'),
    MATCHA: new Milktea('matcha', 'green')
};


const CUPSIZES ={
    SMALL: new CupSize('small', 's'),
    MEDIUM: new CupSize('medium', 'm'),
    LARGE: new CupSize('larger', 'l')
};

const TOPPING = {
    BOBA: new Topping('boba', 'black'),
    JELLY: new Topping('jelly', 'white'),
    EGGPUDDING: new Topping ('eggpudding', 'yellow')
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
