let num1 = 10;
let num2 = 20;
let result;

result = num1 + num2;
console.log(
  "결과는 : " + result + " | " +
  (num1 + num2) + " : " +
  (num1 - num2) + " : " +
  (num1 * num2) + " : " +
  (num1 / num2) + " : " +
  (num1 % num2) + " : "
);
console.log(num1 + num2 + "더하기");
num1 = 425;
result = num1 % num2;
console.log("나머지 : " + result);
num1 = 3;
console.log(num1 % 2);
result = num1 % 2 == 0;
console.log(result);
if(result){
  console.log("짝수");
}
result = num1 % 2 == 0 ? 2 : 3;
console.log(result);

//조건문
if (num1 % 2 == 0) {
  console.log("짝수");
}

if (num1 % 2 == 1) {
  console.log("홀수");
}

//반복문

// for (let i = 0; i < 5; i++) {
//   console.log("");
//   for (let j = i; j < 5; j++) {
//     console.log("*");
//   }
// }