console.log("Start");

const dbPassword = '12345!';

const fetchUserProfile = (callback) => {
    setTimeout(( ) => {
        callback({
            id: 2,
            profile: "@johndoe",
          });
    }, 3000)
};

const logInUser = (username, password, callback, failureCallback) => {
    setTimeout(() => {
        console.log("Fetching user", username);
        if (password === dbPassword) {
            //matched
            callback({account: username});
        } else {
            failureCallback({message: "Passwords do not match"})
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
    fetchUserProfile((profile) => {
        console.log("Profile received", profile)
    });
    //here you can e.g. fetch user profile
    //you'd have another callback waiting for data to load 
},
(errors) => {
    console.error(errors);
}
); // add 3rd parameter - userReceived is an object created by logInUser

console.log("End");

// Can lead to CALLBACK HELL

/*
retrieveUserLikedProgrammes(userDataReceived.account, (likedProgrammes) => {
        console.log("likedProgrammes", likedProgrammes);
        retrieveProgrammeDetail(likedProgrammes[0], (details) => {
            console.log("Details for programme", details);
            retrieveBlahA(..., () => {
// A ...
                retrieveBlahB(..., () => {
/// B ...
                    retrieveBlahC(..., () => {
// C ...
                        retrieveBlahD(..., () => {
/// D ..
                            }) 
                        })
                        }) 
                    })
                }) 
            })
*/