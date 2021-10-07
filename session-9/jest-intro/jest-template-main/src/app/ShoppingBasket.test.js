import ShoppingBasket from "./ShoppingBasket";

describe("Shopping Basket: ", () => {
    let shoppingBasket;

    // setup
    beforeEach(() => {
        shoppingBasket = new ShoppingBasket();
    })
    
    it("Should initialise with 0 items", () => {
        // Instance creation
        

        expect(shoppingBasket.items.length).toBe(0);
    });

    it.skip("Should add apples to shopping basket", () => {
        // need to finish this one
        const Item = "apples";

        const result = shoppingBasket.addItems(Item);

        expect(result).items.toBe(["apples"]);
    });

    // teardown
    afterEach(() => {
        shoppingBasket = null;
    })
})