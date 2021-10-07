// Fetch API:
const URL = 'https://jsonplaceholder.typicode.com/posts'

//NB. fetch returns a promise

/*const displayPosts = (posts) => {
    console.log(posts);
  
    const postsList = document.getElementById("posts");
  
    posts.forEach(function (post) {
      const { id, body } = post;
  
      const listItem = document.createElement("li");
  
      listItem.innerHTML = `ID: ${id}, Body: ${body}`;
  
      postsList.appendChild(listItem);
    });
  };

fetch(URL)
  .then(response => response.json())
  .then(json => displayPosts(json)); */

  // Create post
  const formElement = document.getElementById("new-post-form");

  const addNewPost = (event) => {
    event.preventDefault();
    const userField = document.getElementById("user");
    const titleField = document.getElementById("title");
    const bodyField = document.getElementById("body");

    const requestBody = {
      userId: userField.value,
      title: titleField.value,
      body: bodyField.value
    };

    //await goes just before external call (here: fetch)
    const response = await fetch (URL, {
      method: "POST",
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    //reset fields
    userField = "";
    titleField = "";
    bodyField = "";

    document.getElementById("status").innerHTML = "Successfully created post";

  }

  formElement.addEventListener("submit", addNewPost);