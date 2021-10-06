/* Statuses:
- pending
- fullfilled/resolved
- rejected */

console.log("Start");

const dbPassword = '12345!';

const fetchUserProfile = () => {
    return new Promise ((resolve) => {
        setTimeout(( ) => {
        resolve({
            id: 2,
            profile: "@johndoe",
          });
    }, 3000)})
    
};

const logInUser = (username, password) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        console.log("Fetching user", username);
        if (password === dbPassword) {
            //matched
            resolve({account: username});
        } else {
            reject({message: "Passwords do not match"})
        }
        
    }, 2000);
    });
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
    fetchUserProfile((profile) => {
        console.log("Profile received", profile)
    });
    //here you can e.g. fetch user profile
    //you'd have another callback waiting for data to load 
},
(errors) => {
    console.error(errors);
}
); 



console.log("End");