// -----------------
// 초기 실행 예시 (로그인 후 emp_no 필요)
// -----------------
const userStr = localStorage.getItem('user'); // 문자열 가져오기
if (userStr) {
  const user = JSON.parse(userStr); // 문자열 → 객체
  const emp_no = user.EMP_NO; //  접근 가능
  const emp_name = user.EMP_NAME;
  const deptno = user.DEPTNO;
  console.log(emp_no);
  show_main_board();
  show_my_board(1);
  show_sent_mail(1);
  show_received_mail(1);
  console.log(user);
  document.getElementById('name').innerHTML = '이름 : ' + emp_name;
  document.getElementById('no').innerHTML = '사번 : ' + emp_no;
  let dept;
  switch (deptno) {
    case 10:
      dept = '인사부';
      break;
    case 20:
      dept = '개발부';
      break;
    case 30:
      dept = '영업부';
  }
  document.getElementById('dept').innerHTML = '부서 : ' + dept;
} else {
  console.log('로그인 정보 없음');
}
//나중에 삭제 필요
show_main_board();
show_my_board(1);
show_sent_mail(1);
show_received_mail(1);

// -----------------
// 상단 날짜 표시
// -----------------
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const addZero = num => (num < 10 ? '0' + num : num);
  const timeString = `${addZero(hours)}시 ${addZero(minutes)}분 ${addZero(seconds)}초`;
  const timeDisplay = document.getElementById('date');
  if (timeDisplay) timeDisplay.textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);

//-------------------------------------------------
// 전역 변수
//-------------------------------------------------
let mainList = [];
let myList = [];
let sentList = [];
let receivedList = [];

const ROWS_PER_PAGE = 10;

//-------------------------------------------------
// 전체 게시판
//-------------------------------------------------
function show_main_board() {
  fetch('http://localhost:3000/mainboard')
    .then(response => response.json())
    .then(result => {
      mainList = result;
      showMainPageList(1);
      makePagingList(mainList.length, 'main_paging', showMainPageList);
    })
    .catch(err => console.log(err));
}

function showMainPageList(page = 1) {
  const tbody = document.getElementById('main_body');
  tbody.innerHTML = '';
  const start = (page - 1) * ROWS_PER_PAGE;
  const end = page * ROWS_PER_PAGE;
  mainList.slice(start, end).forEach(item => {
    tbody.appendChild(makeBoardRow(item));
  });
}

//-------------------------------------------------
// 내 게시판
//-------------------------------------------------
function show_my_board(emp_no) {
  fetch(`http://localhost:3000/myboard/${emp_no}`)
    .then(response => response.json())
    .then(result => {
      myList = result;
      showMyPageList(1);
      makePagingList(myList.length, 'my_paging', showMyPageList);
    })
    .catch(err => console.log(err));
}

function showMyPageList(page = 1) {
  const tbody = document.getElementById('my_body');
  tbody.innerHTML = '';
  const start = (page - 1) * ROWS_PER_PAGE;
  const end = page * ROWS_PER_PAGE;
  myList.slice(start, end).forEach(item => {
    tbody.appendChild(makeBoardRow(item));
  });
}

//-------------------------------------------------
// 발신 메일
//-------------------------------------------------
function show_sent_mail(emp_no) {
  fetch(`http://localhost:3000/mail/sent/${emp_no}`)
    .then(response => response.json())
    .then(result => {
      sentList = result;
      showSentPageList(1);
      makePagingList(sentList.length, 'send_paging', showSentPageList);
    })
    .catch(err => console.log(err));
}

function showSentPageList(page = 1) {
  const tbody = document.getElementById('send_msg_body');
  tbody.innerHTML = '';
  const start = (page - 1) * ROWS_PER_PAGE;
  const end = page * ROWS_PER_PAGE;
  sentList.slice(start, end).forEach(item => {
    tbody.appendChild(makeMailRow(item));
  });
}

//-------------------------------------------------
// 수신 메일
//-------------------------------------------------
function show_received_mail(emp_no) {
  fetch(`http://localhost:3000/mail/received/${emp_no}`)
    .then(response => response.json())
    .then(result => {
      receivedList = result;
      showReceivedPageList(1);
      makePagingList(receivedList.length, 'get_paging', showReceivedPageList);
    })
    .catch(err => console.log(err));
}

function showReceivedPageList(page = 1) {
  const tbody = document.getElementById('msg_body');
  tbody.innerHTML = '';
  const start = (page - 1) * ROWS_PER_PAGE;
  const end = page * ROWS_PER_PAGE;
  receivedList.slice(start, end).forEach(item => {
    tbody.appendChild(makeReceivedMailRow(item));
  });
}

//-------------------------------------------------
// 공통 페이징 함수
//-------------------------------------------------
function makePagingList(totalCnt, targetId, callback) {
  const totalPages = Math.ceil(totalCnt / ROWS_PER_PAGE);
  const ul = document.querySelector(`#${targetId}`);
  ul.innerHTML = '';

  // Previous
  const prevLi = document.createElement('li');
  prevLi.className = 'page-item disabled';
  const prevA = document.createElement('a');
  prevA.className = 'page-link';
  prevA.textContent = 'Previous';
  prevLi.appendChild(prevA);
  ul.appendChild(prevLi);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = 'page-item';
    const a = document.createElement('a');
    a.className = 'page-link';
    a.textContent = i;
    a.href = '#';
    a.addEventListener('click', e => {
      e.preventDefault();
      callback(i);
    });
    li.appendChild(a);
    ul.appendChild(li);
  }

  // Next
  const nextLi = document.createElement('li');
  nextLi.className = 'page-item';
  const nextA = document.createElement('a');
  nextA.className = 'page-link';
  nextA.textContent = 'Next';
  nextLi.appendChild(nextA);
  ul.appendChild(nextLi);
}

// -----------------
// 테이블 Row 생성 (게시판)
// -----------------
function makeBoardRow(item) {
  let tr = document.createElement('tr');

  let tdId = document.createElement('td');
  tdId.textContent = item['POST_ID'];
  tdId.style.textAlign = 'left';
  tr.appendChild(tdId);

  let tdTitle = document.createElement('td');
  tdTitle.style.textAlign = 'center';
  // 제목 표시
  let titleSpan = document.createElement('span');
  titleSpan.textContent = item['TITLE'];

  // 버튼 추가
  let btn = document.createElement('button');
  btn.onclick = function () {
    // 예: 상세보기 함수 호출
    showPostDetail(item['POST_ID']);
  };
  btn.appendChild(titleSpan);
  tdTitle.appendChild(btn);

  tr.appendChild(tdTitle);

  let tdDate = document.createElement('td');
  if (item['WRITE_DATE']) {
    let date = new Date(item['WRITE_DATE']);
    tdDate.textContent = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
  } else tdDate.textContent = '';
  tdDate.style.textAlign = 'right';
  tr.appendChild(tdDate);

  return tr;
}

// -----------------
// 테이블 Row 생성 (발신 메일)
// -----------------
function makeMailRow(item) {
  let tr = document.createElement('tr');

  // let tdId = document.createElement('td');
  // tdId.textContent = item['MSG_ID'];
  // tdId.style.textAlign = 'left';
  // tr.appendChild(tdId);

  let tdTitle = document.createElement('td');
  tdTitle.style.textAlign = 'center';
  // 제목 표시
  let titleSpan = document.createElement('span');
  titleSpan.textContent = item['TITLE'];

  // 버튼 추가
  let btn = document.createElement('button');
  btn.onclick = function () {
    // 예: 상세보기 함수 호출
    showPostDetail(item['MSG_ID']);
  };
  btn.appendChild(titleSpan);
  tdTitle.appendChild(btn);

  tr.appendChild(tdTitle);
  let tdDate = document.createElement('td');
  if (item['SEND_DATE']) {
    let date = new Date(item['SEND_DATE']);
    tdDate.textContent = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
  } else tdDate.textContent = '';
  tdDate.style.textAlign = 'right';
  tr.appendChild(tdDate);

  return tr;
}

// -----------------
// 테이블 Row 생성 (수신 메일)
// -----------------
function makeReceivedMailRow(item) {
  let tr = document.createElement('tr');

  // let tdId = document.createElement('td');
  // tdId.textContent = item['MSG_ID'];
  // tdId.style.textAlign = 'left';
  // tr.appendChild(tdId);

  let tdTitle = document.createElement('td');
  tdTitle.style.textAlign = 'center';
  // 제목 표시
  let titleSpan = document.createElement('span');
  titleSpan.textContent = item['TITLE'];

  // 버튼 추가
  let btn = document.createElement('button');
  btn.onclick = function () {
    // 예: 상세보기 함수 호출
    showPostDetail(item['MSG_ID']);
  };
  btn.appendChild(titleSpan);
  tdTitle.appendChild(btn);

  tr.appendChild(tdTitle);
  let tdDate = document.createElement('td');
  if (item['SEND_DATE']) {
    let date = new Date(item['SEND_DATE']);
    tdDate.textContent = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}`;
  } else tdDate.textContent = '';
  tdDate.style.textAlign = 'right';
  tr.appendChild(tdDate);

  return tr;
}

// -----------------
// 로그아웃
// -----------------
document.querySelector('aside button').addEventListener('click', function (e) {
  console.log('로그아웃');
  localStorage.removeItem('user');
  window.location.href = './login.html';
});
