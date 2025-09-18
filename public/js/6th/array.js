//array.js

const names = ['김기홍', '박수홍', '황민우', '최민우', '김길동'];

//filter() true값에 해당하는 요소들을 새로운 배열 저장.
const result = names.filter(item => item.indexOf('김') == 0);
console.log(result);

//짝수만 새로운 배열에 넣기
const numbers = [23, 44, 22, 57, 80, 19];
const evenNumber = numbers.filter(item => item % 2 == 0);
console.log(evenNumber);

//map() => A -> A' 맵핑(데이터 A를 A'로 형태 변화하는 기능)
const students = [{
    sno: 100,
    sname: '권수민',
    score: 80
  },
  {
    sno: 200,
    sname: '송승일',
    score: 75
  },
  {
    sno: 300,
    sname: '배진욱',
    score: 85
  },
  {
    sno: 400,
    sname: '박세민',
    score: 55
  }
];
const arr = students
  .map(item => {
    let {
      sno,
      sname
    } = item;
    let isPass = item.score > 60 ? "PASS" : "FAIL";
    return {
      sno,
      sname,
      isPass
    }
  })
  .filter(item => {
    item.isPass == "PASS"
  })
  .forEach(item => {
    if (item.isPass == "PASS") {
      console.log(item);
    }
  })
//