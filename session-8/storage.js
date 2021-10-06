// Storage: cookies, local storage, session storage

// Local storage

// ADDING NEW ITEM TO THE LOCAL STORAGE
localStorage.setItem("name", "foo");
localStorage.setItem("sport", "rugby");
// can be accessed from browser dev tools > application > local storage > IP

// Retrieve 'sport' from storage
const sportValue = localStorage.getItem('sport');
console.log(sportValue);

const countries = ['poland', 'england'];

localStorage.setItem('countries', JSON.stringify(countries));

const countriesFromStorage = JSON.parse(localStorage.getItem('countries'));

console.log('countries from storage', countriesFromStorage);

// Adding an object

const product = {
    name: 'apple',
    price: 0.12,
};

localStorage.setItem('product', JSON.stringify(product));
const productFromStorage = JSON.parse(localStorage.getItem('product'));

console.log('product from stoarge', productFromStorage);

localStorage.removeItem('name');

// Session storage

sessionStorage.setItem('id', 123456);

// Same principles for operating local and session storage

// Cookies
document.cookie = `name=John Doe; expires=` + new Date(2022, 0, 1).toUTCString();

