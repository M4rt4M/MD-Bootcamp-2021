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

    it("Should add apples to shopping basket", () => {
        const item = "apples";

        shoppingBasket.addItems(item);

        expect(shoppingBasket.items).toContain(item);
    });

    // teardown
    afterEach(() => {
        shoppingBasket = null;
    })
})