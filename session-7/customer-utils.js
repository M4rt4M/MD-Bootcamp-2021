const customers = [{
    id: 001,
    name:"John Smith", 
    address: {
        street: "Some Customer Street"}
    }];

function getCustomerById(id) {
    const customer = customers.filter((customer) => customer.id === id);
    console.log(customer);
    
    return addPrivileges(id, customer);
};

function addPrivileges(id, customer) {
    let customerWithPrivilege = { ...customer };
  
    if (id === 1) {
      customerWithPrivilege.rank = "Gold";
    }
  
    return customerWithPrivilege;
  }

  module.exports = {getCustomerById}

