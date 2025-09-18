//string.js

let name = "Hong";
let age = 20;
let result = '';
let obj = {
  name: '홍길동',
  bt: 'o',
  showInfo() {

  }
}
if (age >= 20) {
  result = "성인";
} else {
  result = "미성년";
}
result = age >= 20 ? "성인" : "미성년";
//console.log(`내 이름은 ${name == "Hong"}, ${result}`);

let idx = "Hello, World".indexOf("w"); //7반환 0부터 시작

idx = "김성태, 박명식, 홍길동".indexOf("박명석"); // -1반환.

let myFriends = ["김성태", "박명식", "홍길동"];

myFriends.forEach((item, idx, ary) => {
  if (item.indexOf('박') == 0) {
    //console.log(item);
  }
});

// let str = "I am the born of my sword";
// console.log(str.indexOf("the")); 5출력
// console.log(str[5]); t출력

//원시데이터형, string, number, boolean,
//stack / heap

//문자열 <--> 문자객체 new String("Hello");

//slice
//console.log("pizza, orange, cereals".slice(7, 13));
//console.log("pizza, orange, cereals".substring(0, 5));

//CharAt()
//console.log("Hello, World".charAt(7));
//console.log("Hello, World" [7]);

//replace()
//console.log("Hello, World".replace('W', 'Change Up W'));

//trim()
//console.log('   Hello   '.trim()); //좌우 공백 제거

let code = "ABCDEFG";
//.log(code.startsWith("DEF", 3));
//startsWith
//시작값을 비교해 true,false 반환
//숫자가 있다면 숫자만큼 이동후 시작값을 비교해 반환
//console.log(code.endsWith("D", 4));
//endsWith
//마지막값을 비교해 true,false 반환
//숫자가 있다면 숫자만큼의 문자를 기준으로 마지막 값을 비교해 반환
//console.log(code.includes("Q"));
//includes는 지정한 문자가 문자열에 포함이 되있는지를 판별
//console.log(code.repeat(5));
//repeat 전달한 수만큼 반복 출력

//1번 성별판별함수.
function getGender(no) {
  //주민번호의 성별(뒷자리7자리중 1번째 값)=>1,3 남/2,4du
  let gen = no.replace('-','');
  let gender = gen[6] == 1 || gen[6] == 3 ? "남자" : "여자";
  console.log(`성별은 ${gender}`);
}

const numAry = ["9901011237874", "0303033234545", "980304-2324568"];
numAry.forEach((item) => {
  getGender(item);
});

//2번 사용자 아이디 확인.
function getId(mail) {
  //메일주소에서 아이디 부분을 반환.
  let id = mail.indexOf("@");
  console.log(`id: ${mail.slice(0,id)}`);
}

const email = [
  "rcatherinee@php.net",
  "ngillionsd@loc.gov",
  "myanyshev7@flavors.me",
  "nsilverwood4@squarespace.com "
];
email.forEach((item) => {
  getId(item);
})

let no = "030303-3234545";
console.log(no.slice(-7).charAt(0));