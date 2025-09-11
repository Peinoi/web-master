function checkScore() {
  const score = parseInt(document.querySelector("#user_value").value)
  if (score >= 90) {
    console.log("참잘함");
  }
  if (score >= 80) {
    console.log("잘함");
  }
  if (score >= 70) {
    console.log("보통");
  }
  if (score >= 60) {
    console.log("노력");
  } else {
    console.log("낙제");

  }
}