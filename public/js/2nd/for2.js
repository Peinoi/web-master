//조건문추가
let sum = 0;
let sum2 = 0;
let sum3 = 0;
let ran = parseInt(Math.random() * 100);
for (let i = 1; i <= 10; i++) {
  ran = parseInt(Math.random() * 10);
  document.writeln(`랜덤 값은 ${ran}입니다.`)
  document.writeln(`<br>`)
  if (ran % 2 == 0) {
    sum2 += ran;
  }
  if (ran % 3 == 0) {
    sum3 += ran;
  }
}
document.writeln(`2의 배수의 합은 ${sum2}입니다.`)
document.writeln(`3의 배수의 합은 ${sum3}입니다.`)
document.writeln(`<br>`)



//1~100  값중에 3의  배수의 합을 구하시오
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    sum += i;
  }
  if (i % 2 == 0) {
    sum2 += i;
  }
}
document.writeln(`3의 배수의 합은 ${sum}입니다.`)
document.writeln(`2의 배수의 합은 ${sum2}입니다.`)
document.writeln(`<br>`)

//1~10까지의 합
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  if (sum > 30) {
    document.writeln(`현재 i의 값은 => ${i} 
        그리고 ${sum}의 값
      `)
  }
  document.writeln(`<br>`);
}

for (let i = 1; i <= 15; i++) {
  for (let j = i; j <= 15; j++) {
    document.writeln("*")
  }

  document.writeln(`<br>`);
}