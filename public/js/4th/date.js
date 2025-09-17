//date.js
const now = new Date();
console.log(now.toLocaleDateString() + " " + now.toLocaleTimeString());

let today = new Date('2025-09-16 10:30:30');
today.setFullYear('2024');
today.setMonth(9);
today.setDate(7);

console.log(today.toLocaleDateString() + " " + today.toLocaleTimeString());
console.log(`년도: ${today.getFullYear()}`); //월은 0부터 시작
console.log(`월: ${today.getMonth()+1}`); //월은 0부터 시작
console.log('일: ' + today.getDate());
console.log('요일: ' + today.getDay()); //요일은 0은 일요일 1-월 2-화요일

//날짜 입력하면 '2025-11-12' 요일 정보를 반환해주는 함수
function translateDay(day) {
  let date = new Date(day);
  let today = '';
  switch (date.getDay()) {
    case 1:
      today = '월요일';
      break;
    case 2:
      today = '화요일';
      break;
    case 3:
      today = '수요일';
      break;
    case 4:
      today = '목요일';
      break;
    case 5:
      today = '금요일';
      break;
    case 6:
      today = '토요일';
      break;
    default:
      today = '일요일';
  }
  return day+"는 "+today;
}
function translateDay2(day){
  let date = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
  let value = new Date(day);

  return day+"는 "+date[value.getDay()];
}
console.log(translateDay2('2025-10-02'));