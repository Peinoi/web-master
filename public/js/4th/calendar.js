// //calendar.js
// //매개값으로 년, 월 활용
// let yyyy = 2024,
//   mm = 8;
//   //2025-08-01
// let today = new Date();
// today.setFullYear(yyyy);
// today.setMonth(mm);
// today.setDate(1);
// console.log(new Date(today.getTime() - (1000 * 60 * 60 * 24)));
// //라스트 date 계산 공식 new Date(today.getTime() - (1000 * 60 * 60 * 24));
// // 1970-01-01 00:00:00 UTC
// //8월 달의 1일의 위치 월요일
// // 2025-08-01 =>getDay()요일 정보. 는 spcae 
// //8월의 마지막 날 =>  for문의 끝
// //공란은 마지막날 데이트랑 첫날 데이트의 차수
// let lastDate = 31;
// let spaces = 5; //공란의 갯수.

// let tr = document.createElement('tr');
// for (let s = 0; s < spaces; s++) {
//   let td = document.createElement('td');
//   tr.appendChild(td);
// }
// //실제 날짜 계산.
// for (let d = 1; d <= lastDate; d++) {
//   let td = document.createElement('td');
//   td.innerHTML = d;
//   tr.appendChild(td);
//   if ((d + spaces) % 7 == 0) {
//     tr = document.createElement('tr');
//   }
//   document.querySelector('tbody').appendChild(tr);
// }





createCalendar(2025, 9);

function createCalendar(yy, mm) {
  let tr = document.createElement('tr');

  //홀리데이
  let hollyday = [3, 15, 24, 9, 14];

  let today = new Date();
  today.setFullYear(yy);
  today.setMonth(mm);
  console.log(today.getMonth());
  today.setDate(1);
  let lastday = new Date(today.getTime() - (1000 * 60 * 60 * 24));
  today.setMonth(mm - 1);

  //캡션
  let cap = document.createElement('caption');
  cap.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";
  document.querySelector('table').appendChild(cap);

  let spaces = today.getDay();
  console.log(spaces);

  for (let d = 0; d < spaces; d++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  for (let i = 1; i <= lastday.getDate(); i++) {
    let td = document.createElement('td');
    td.innerHTML = i;
    tr.appendChild(td);
    for (let ho = 0; ho < hollyday.length; ho++) {
      if (i == hollyday[ho]) {
        td.style.backgroundColor = 'red';
        td.style.color = 'white';
      }
    }
    if ((i + spaces) % 7 == 0) {
      // td.setAttribute('class', 'saturday');
      td.style.backgroundColor = "blue";
      td.style.color = "white";

      document.querySelector('tbody').appendChild(tr);
      tr = document.createElement('tr');
    } else if ((i + spaces) % 7 == 1) {
      // td.setAttribute('class', 'sunday'); 클래스에 테이블 속성을 적용하면 안됨
      td.style.backgroundColor = "red";
      td.style.color = "white";
    }



  }
  document.querySelector('tbody').appendChild(tr);

}