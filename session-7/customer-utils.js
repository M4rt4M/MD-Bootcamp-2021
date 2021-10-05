const customers = [{
    id: 001,
    name:"John Smith", 
    address: {
        street: "Some Customer Street"}
    }];

export function getCustomerById(id) {
    const customer = customers.filter((customer) => customer.id === id);
    console.log(customer);
    
    return addPriveledges(id, customer);
};

function addPriviledges(id, customer) {
    //let if return - need to finish
}

