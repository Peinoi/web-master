//array2.js

const numAry = new Array();
// numAry = []; //상수는 재할당이 불가.
numAry.push(10); //[10,20]
numAry.push(25);
numAry.push(34);
numAry.unshift(47);
numAry.splice(2, 0, 33);
numAry.splice(2, 0, 22, 19);
let sum = 0;
numAry.forEach(function (item, idx, ary) {
  if (idx == 0 || idx == numAry.length - 1) {
    console.log(idx);
    sum += item;
  }
});
console.log('sum의 값은 : ' + sum);
// numAry.forEach(value => {
//   console.log(value);
// });