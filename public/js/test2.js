let friend1 = {
  name: "박규태",
  height: 175,
}

let friend2 = {
  name: "김민식",
  height: 180
}

if (friend1.height > friend2.height) {
  console.log(friend1.name + " 크다");
}
if (friend1.height < friend2.height) {
  console.log(friend2.name + " 크다");
}
friend1.height = friend2.height;
if (friend1.height == friend2.height) {
  console.log(friend1.name + "과 " + friend2.name + "의 키는 같다.");
} else {
  console.log("키 다름");
}
let num3 = prompt("value 숫자 입력 : ");

if (num3 % 2 == 0) {
  console.log("짝")
} else {
  console.log("홀")
}