//todo.js

//2개의 값을 입력 받도록. 화면 구성.
//계산하는 기능 구현.
//4칙 연산
// plus, minus, multiply, divide 함수이름.

function col(first, second, ope) {
  let result= 0;
  let num1= 0;
  let num2 = 0;      
   num1 = parseInt(first);
   num2 = parseInt(second);
  switch (ope) {
    case "+":
      result = num1 + num2;

      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      
  }
  document.querySelector("textarea").innerHTML = result;
}