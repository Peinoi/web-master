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



// 현재 날짜 및 시간 정보를 담는 Date 객체를 생성합니다.
const currentDate = new Date();
// 현재 연도(Year)를 가져옵니다.
const currentYear = currentDate.getFullYear();
// 현재 월(Month)을 가져옵니다.
const currentMonth = currentDate.getMonth() + 1;
const currentday = currentDate.getDate();
// 현재 연도와 월을 createCalendar 함수에 전달하여 실행합니다.
createCalendar(currentYear, currentMonth,currentday);

function createCalendar(yy, mm, dd) {
  let tr = document.createElement('tr');


  //홀리데이
  let today_color = dd;
  console.log(today_color);
  
  let today = new Date();
  today.setFullYear(yy);
  today.setMonth(mm);
  console.log("월"+today.getMonth());
  today.setDate(1);
  let lastday = new Date(today.getTime() - (1000 * 60 * 60 * 24));
  today.setMonth(mm - 1);

  //캡션
  let cap = document.createElement('caption');
  cap.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";
  document.querySelector('table').appendChild(cap);

  let spaces = today.getDay();
  console.log("여백"+spaces);

  for (let d = 0; d < spaces; d++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }

  for (let i = 1; i <= lastday.getDate(); i++) {
    let td = document.createElement('td');
    td.innerHTML = i;
    tr.appendChild(td);

    
    if ((i + spaces) % 7 == 0) {
      // td.setAttribute('class', 'saturday');
      td.style.backgroundColor = "#ADD8E6"; // 연한 하늘색 (Light Blue)
      td.style.color = "#333333"; // 진한 회색 (Soft Black)
      document.querySelector('tbody').appendChild(tr);
      tr = document.createElement('tr');
    } else if ((i + spaces) % 7 == 1) {
      // td.setAttribute('class', 'sunday'); 클래스에 테이블 속성을 적용하면 안됨
      td.style.backgroundColor = "#fa8841ff"; // 연한 하늘색 (Light Blue)
      td.style.color = "white";
    }
    
    
    if (i == today_color) {
      console.log(i+ " "+today_color);
      td.style.backgroundColor = "#8aff3cff"; // 연한 하늘색 (Light Blue)
      td.style.color = "white";
    }
    
  }
  document.querySelector('tbody').appendChild(tr);

}