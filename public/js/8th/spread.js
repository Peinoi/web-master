//spread.js
// //원시 데이터 타입
// let fruit = 'apple';
// let newFruit = fruit;
// newFruit += ', mango';
// console.log(fruit,newFruit);

//배열도 object
const veggie = ['tomato', 'cucumber', 'beans']; //....veggie
const newVeggie = veggie; //객체의 주소 동일 (객체 한정)


newVeggie.push('peas');
console.log(veggie, newVeggie); //같ㅊ은 배열을 참조
const anotherVeggie = [...veggie, ...["grap"]]; //['tomato','cucumber','beans',"peas"] 
anotherVeggie.push('peanuts');
console.log(veggie, anotherVeggie);

//펼침 연산자.
function sum(a = 0, b = 0, ...num) {
  let result = 0;
  for (let n of num) {
    result += n;
  }
  return result;
}
let result = sum(1, 2, 3, 4, 5, 6);
console.log(result);

//
const myFriend = {
  name: 'Hong',
  age: 20
};
const yourFriend = myFriend;
myFriend.age = 22;
const anFriend = {
  ...myFriend
};
myFriend.name = 'Hwang';
console.log(myFriend, yourFriend, anFriend);
