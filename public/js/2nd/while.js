//while

let i = 1;
while (i <= 10) {
  document.writeln(`i의 현재 값 : ${i}`)
  document.writeln(`<br>`)
  i++;
}



//조건 만족할 동안만 실행.
while (true) {
  let rv = parseInt(Math.random() * 10);
  document.writeln(`임의의 값 => ${rv}`)
  document.writeln(`<br>`)
  if (rv == 0) {
    break;
  }
}
 document.writeln("endof prog.");