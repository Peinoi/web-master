// 자바 스크립트
// 1.값을 저장. => 변수를 활용.
// 2.기능.      => 함수를 활용.
let user_id = "user01"; //문자열.
let user_age = 20; //숫자.
let is_child = false; // true/false.
function show_info() {
  console.log("회원의 id는 : " + user_id);

}
show_info();//함수 실행.
//h3태그의 Hello, world => 안녕!
function changeWord() {
  //화면요소를 선택.
  document.querySelector('h3#world').innerHTML = "안녕!";
}