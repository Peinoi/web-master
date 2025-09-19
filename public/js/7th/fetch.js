//fetch.js
fetch('http://localhost:3000/posts') //Promise객체 반환.
  .then(function (response) {
    console.log(response);
    return response.json(); //자바스크립틔 객체변경
  })
  .then((result) => {
    console.log(result);
   


  })
  .catch(function (err) {
    console.log(err);
  });
  