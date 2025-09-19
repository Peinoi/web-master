// promise.js
// 콜백 함수 -> 순차적으로 구성.

//new Object() 프로미스 객체는 매개값으로 함수로 받는다.
function callFnc(x1 = 0, x2 = 0, anonymousFnc) {
  return anonymousFnc(x1, x2);
}
let result = callFnc(10, 20, function (a, b) {
  return a * b;
});
console.log(result);

const promise = new Promise(function (resolve, reject) {
  resolve('ok');
  reject('NG');
});

promise
  .then(function (response) { //성공시
    console.log(response);

  })
  .then(function (result) {
    console.log(result);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(err => { //실패시
    console.log(err);
  })