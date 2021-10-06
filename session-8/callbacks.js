console.log("Start");

const dbPassword = 'abc';

const fetchUserProfile = (callback) => {
    setTimeout(( ) => {
        callback();
    }, 2000)
};

const logInUser = (username, password, callback, failureCallback) => {
    setTimeout(() => {
        console.log("Fetching user", username);
        if (password === dbPassword) {
            //matched
            callback({account: username});
        } else {
            failureCallback({message: "Log in unsuccessful"})
        }
        
    }, 2000);
    
};

// one way of doing this - then call it as a 3rd param
/*const callbackSuccess = (userReceived) => {
    console.log("Received user", userReceived);
};*/
const loggedInUser = logInUser(
    'joanne@foo.bar', 
    '12345!', 
    (userReceived) => {
    console.log("Received user", userReceived);
    //here you can e.g. fetch user profile
    //you'd have another callback waiting for data to load 
},
(errors) => {
    console.error(errors);
}
); // add 3rd parameter - userReceived is an object created by logInUser

console.log("End");