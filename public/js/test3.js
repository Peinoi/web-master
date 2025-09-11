//prompt함수를 활용. 2개의 숫자값을 입력.
//2수의 합이 3의 배수인지 /3의 배수가 아닌지 판별

let num1 = prompt("첫 번째 숫자 : ");
let num2 = prompt("두 번째 숫자 : ");
let result = parseInt(num1)+parseInt(num2);
if(result % 3 ==0){
  console.log(result+"는(은) 3의 배수임");
}
else{
  console.log(result +"는(은) 3의 배수가 아님");
}