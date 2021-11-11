/*Traversy Media Udemy course, Modern Javascript
 *from the beginning, November 2021.
 *The "before" version of this file uses functions to fetch data.
 *The "after" version is rewritten with arrow functions.
 *I also added a heading to each data retrieval and kept all data
 *on the page concurrently.
 */

/*Before, fetch with functions
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
*/

/*After, rewritten with arrow functions.
Also arranged the output on 3 different
lines.*/

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

/* Get local text file data, arrow, with added heading*/
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(output => {
      console.log(output);
      const heading = `Text`;
      document.querySelector('.heading1').innerHTML = heading;
      output = `${output}`;
      document.getElementById('output1').innerHTML = output;
    })
    .catch(err => console.log(err));
}

/* Get local json data, arrow, with added heading*/
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let heading = `JSON Data`;
      document.querySelector('.heading2').innerHTML = heading;
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output2').innerHTML = output;
    })
    .catch(err => console.log(err));
}

/* Get from external API, arrow, with added heading*/
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let heading = `GitHub Usernames`;
      document.querySelector('.heading3').innerHTML = heading;
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output3').innerHTML = output;
    })
    .catch(err => console.log(err));
}
