//destructuring.js

const person = {
  name: '홍길동',
  age: 20
}
let {
  name,
  age
} = person;
//객체 디스트럭처링
// let name = person.name; //name:홍길동
// let age = person.age; //age:20
console.log(name);
//배열 디스트럭처링
const numAry = [10, 20, 30];
let [n1, n2, n3] = numAry;
console.log(n3);

//배열 메소드 : forEach(), map(), filter(), reduce()....
const stdAry = [{
  sno: 100,
  name: '홍길순',
  score: 60
}, {
  sno: 200,
  name: '김길동',
  score: 85
}, {
  sno: 300,
  name: '김인숙',
  score: 90
}]
//필터 사용
// const newAry = stdAry.filter(item => {
//   if (item.score >= 70) {
//     return true;
//   }else{
//     return false;
//   }
// })

//map 사용
const newAry = stdAry.map(item => {
  const obj = {
    sno: sn,
    name: nm
  } = item; //객체디스트럭처링
  // obj.sno = item.sno;
  // obj.name = item.name;
  return {
    sn,
    nm
  };
})

//forEach 사용
// const newAry = [];
// stdAry.forEach(item => {
//   if (item.score >= 70) newAry.push(item);
// })
console.log(newAry);