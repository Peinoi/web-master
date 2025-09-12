//function 

let num1 = 10;
let num2 = 20;
let n1 = 10;
let n2 = 20;

{
  let n2 = 2;
  document.writeln(`${n2}`);
}
document.writeln(`${n2}`);

function varFunc() {
  let n1 = 100;
  n1 = 20;
  document.writeln(`local = > ${n1}`);
}
document.writeln(`global-> ${n1}`);
varFunc();

function sum(n1, n2) {

  let result = n1 + n2;
  document.writeln(`결과는 ${result}`);
}
sum(10, 3);