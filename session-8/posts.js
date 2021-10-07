// Fetch API:
const URL = 'https://jsonplaceholder.typicode.com/posts'

//NB. fetch returns a promise

const displayPosts = (posts) => {
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
  .then(json => displayPosts(json));
