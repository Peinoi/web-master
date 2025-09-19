//storage.js
console.log(window);
// localStorage.setItem('myName','이창호');
// localStorage.setItem("myInfo", '{"name": "Hong","age": 20}');
// let info = JSON.parse("myInfo");

// 게시판 =>
// localStorage.setItem("boardList", JSON.stringify(
//       [{
//           bno: 1,
//           title: "title",
//           content: "content",
//           writer: "user"
//         },
//         {
//           bno: 2,
//           title: "title2",
//           content: "content2",
//           writer: "user2"
//         },
//         {
//           bno: 3,
//           title: "title3",
//           content: "content3",
//           writer: "user3"
//         },
//         {
//           bno: 4,
//           title: "title4",
//           content: "content4",
//           writer: "user4"
//         }
// ]));

//아이템(students)
//학번:100,이름:홍길동,점수:80
//학번:200,이름:박철수,점수:85
//학번:300,이름:김민우,점수:76
// localStorage.setItem("students", JSON.stringify(
//   [{
//       sno: 100,
//       sname: "홍길동",
//       score: 80
//     },
//     {
//       sno: 200,
//       sname: "박철수",
//       score: 85,
//     },
//     {
//       sno: 300,
//       sname: "김민우",
//       score: 76,
//     }

//   ]));
console.log(localStorage.getItem("students"));

function loadDate() {
  document.querySelector('.data-container').innerHTML = ""; //기존값 삭제

  let data = JSON.parse(localStorage.getItem("students"));
  // showStudent();

  console.log(data);
  data.forEach((item) => {
    let div = document.createElement('div');
    let fields = ['sno', 'sname', 'score'];
    for (let i = 0; i < fields.length; i++) {
      let span = document.createElement('span');
      span.innerHTML = item[fields[i]];
      span.setAttribute('class', `data-${fields[i]}`);
      div.appendChild(span);
    }
    //수정화면으로 이동하는 버튼
    let btn = document.createElement('button');
    btn.innerHTML = "수정";
    btn.addEventListener('click', function (e) {
      // search : sno 저장
      localStorage.setItem('search', item.sno);
      location.href = 'update.html';
    })
    div.appendChild(btn);
    document.querySelector('.data-container').appendChild(div);
  });
}
loadDate(); //함수 호출

//현재값을 불러오기
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); //기본 기능 정지
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let score = document.getElementById('score').value;


  if (!sno || !sname || !score) {
    alert("값을 입력해주세요");
    return;
  }
  if (!confirm("저장하겠습니까?")) {
    return;
  }
  let data = JSON.parse(localStorage.getItem("students"));

  //[중복값 확인 
  if (data.filter(item => sno == item.sno).length) {
    alert("학번이 중복돼었습니다.");
    sno = document.getElementById('sno').value = '';
    return;
  }


  // let check = false;
  // data.forEach((item) => {
  //   if (item.sno == sno) {
  //     check = true;

  //   }
  // })
  // if (check) {
  //   alert("학번이 중복돼었습니다.");
  //   sno = document.getElementById('sno').value = '';
  //   return;
  // }
  //중복값 확인]

  data.push({
    sno,
    sname,
    score
  });
  //스토리지에 저장하기
  localStorage.setItem('students', JSON.stringify(data));
  loadDate();


  sno = document.getElementById('sno').value = '';
  sname = document.getElementById('sname').value = '';
  score = document.getElementById('score').value = '';
})