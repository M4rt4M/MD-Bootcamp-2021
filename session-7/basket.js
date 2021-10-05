import getCourierByKey from "C:/Users/Marta/Documents/Bootcamp21/session-7/courier-utils.js";
import {getCustomerById} from "C:/Users/Marta/Documents/Bootcamp21/session-7/customer-utils.js";


const transactionDetails = {
    courier: "DHL",
    product: {name: "Jeans", price: 22.99},
    customerId: 001,
};

const customer = getCustomerById(transactionDetails.customerId);
console.log(customer);

const courierAddress = getCourierByKey(transactionDetails.courier);

console.log(courierAddress);