class Item { //object template
    constructor(name, quantity, pricePerUnit) {
        this.name = name;
        this.quantity = quantity;
        this.pricePerUnit = pricePerUnit;
    }
    

    getCost() {
        return this.quantity*this.pricePerUnit;
    }
};

class ShoppingBasket extends Item { //inherits item
    constructor(total, item) {
        this.total = 0;
        super(item);
    }
    
    /*setNewItem(newItem) { // changed
        this.items.push(newItem); // changed
    }/*

    // function addItems -  could use rest operator
    addItems
    // takes in an array that take item class object (name, quantity, price per unit)
    // loop through the array, item class getCost would return quant * price
    // add cost pu to the total

    getTotal() {
        return this.total;
    }
};

const myBasket = new ShoppingBasket(0, ['carrot']);
myBasket.setNewItem('broccoli'); // changed
console.log(myBasket);

