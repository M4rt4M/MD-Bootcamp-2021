const honeExample = "0785 676 6543"

const validatePhoneNo = (phoneNumber) => {
    const phoneRE = /\(?\+?([44]{2}|[0])?\)?\s?\d{3,10}?\s?\d{3,10}?\d{3,10}/;
    return phoneRE.test(phoneNumber);
}; 

console.log(validatePhoneNo());

