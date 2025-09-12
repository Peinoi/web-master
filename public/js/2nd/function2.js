//function2
//매개변수 2개 => 1,10 까지 다 더하기
sumBy2Number(100, 10);

function sumBy2Number(num1, num2) {
  let sum = 0;
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;

  // console.log(`${num1}부터 ${num2}까지의 총 합 : ${sum}`);
}

//매개변수(?,?) 비교해서 큰놈을 콘솔에 출력 -> 
showMax(9, 5);

let result = sumBy2Number(10,100);
console.log("합계반환값 "+result);

function showMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

//구구단 3단을 콘솔에 출력하는 함수 = multiplication
multiplication(3);

function multiplication(gugudan) {

  for (let i = 1; i <= 9; i++) {
    console.log(`${gugudan} X ${i} = ${gugudan*i}`);
  }
}

// multiplication2();
// function multiplication2(){
//   let value = parseInt(prompt("구구단 단수 입력 : "));
//   for(let i=1; i<=9; i++){
//     document.writeln(`${value} X ${i} = ${value*i}`);
//     document.writeln(`<br>`)
//   }
// }