let my_Name = "도우서";
let my_Age = 20;
let pets = [{
    name: "야옹이",
    age: 3
  },
  {
    name: "멍멍이",
    age: 4
  }
]; //name,age

console.log(pets[0]);

let myFriend = {
  name: "홍길동",
  age: 20,
  phone: "010-1234-5678",
  address: "대구 중구 100번지"
}
// console.log(myFriend.name);
// console.log(myFriend.age);
// 야옹이의 이름,나이
pets[0].age = 2;//값을 변경.
console.log(pets[0].name+" "+pets[0].age);