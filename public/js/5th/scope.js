//scope.js scope=범위
// 전역(global) vs 지역(local)
// 블록 단위 변수 => let or const * const는 기본적으로 값이 변하지 않는 변수를 할당할떄 사용
//var & let, const

var myAge = 20;


function showAge() {
  var myAge = 22;
  console.log(myAge + 1);
}

showAge();

{
  var myAge = 10;
  myAge = 1;
  console.log(myAge + 1);
}

console.log(myAge + 1);