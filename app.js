//Task 1
//#1 number of public repos
fetch("https://api.github.com/users/mredlinger1/repos")
  .then((response) => response.json())
  .then((repos) => console.log(repos.length));

//#2 number of followers
fetch("https://api.github.com/users/mredlinger1/followers")
  .then((response) => response.json())
  .then((followers) => console.log(followers.length));

//#3 follower ids
fetch("https://api.github.com/users/mredlinger1/followers")
  .then((response) => response.json())
  .then((followers) =>
    followers.forEach((user) => {
      console.log(user.login);
    })
  );

// TASK 2
// 1. Get number of comments
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log("Number of Comments: " + json.length));

// 2. Get number of photos
fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => console.log("Number of phtotos: " + json.length));

// 3. Show the name of each user and their email address
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log("Name: " + json[i].name + "\nEmail:" + json[i].email);
    }
  });

// 4. Show the name of each user and their current city
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log("Name: " + json[i].name + "\nCity: " + json[i].address.city);
    }
  });

// 5. Show the number of todos that have been completed
fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
  .then((response) => response.json())
  .then((json) =>
    console.log("Number of todos that have been completed: " + json.length)
  );

// 6. Show the titles and ids of all todos that have already been completed
fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log("Title: " + json[i].title + "\nId: " + json[i].id);
    }
  });

// 7. Show the name of the user for each incomplete todo
fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      fetch("https://jsonplaceholder.typicode.com/users?id=" + json[i].userId)
        .then((response) => response.json())
        .then((json) => console.log("Name: " + json[0].name));
    }
  });

//8. Show the name of the user owns the album with the title "quidem molestiae enim"
fetch(
  "https://jsonplaceholder.typicode.com/albums?title=quidem%20molestiae%20enim"
)
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      fetch("https://jsonplaceholder.typicode.com/users?id=" + json[i].userId)
        .then((response) => response.json())
        .then((json) => console.log("Album Owner: " + json[0].name));
    }
  });
