//db.js
//이벤트
//폼 기본 기능 차단
document.querySelector('div#container>form')
  .addEventListener('submit', function (e) {
    e.preventDefault(); //기본 기능 차단
    addPost();
  });


// 입력값 추가
function addPost() {
  const xhtp = new XMLHttpRequest();
  const title = document.querySelector('input[name="title"]').value;
  const author = document.querySelector('input[name="author"]').value;
  xhtp.open('post', 'http://localhost:3000/posts');
  //요청헤더 : 컨텐트 형식 지정.
  xhtp.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
  xhtp.send(JSON.stringify({
    title: title,
    author: author
  }));
  xhtp.onload = function () {

    let result = JSON.parse(xhtp.responseText);
    console.log(result);
    let div = document.createElement('div');
    div = makeRow(result);
    document.querySelector('#data-container').appendChild(div);

    //초기화
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';

    // location.reload();페이지 강제 새로고침
    // load(result);

  }

}

//데이터 한건에 대한 row 생성하는 함수
function makeRow(post) {
  let fields = ['id', 'title', 'author'];
  let div = document.createElement('div');
  //div에클릭 이벤트
  div.addEventListener('click', function () {
    //댓글 목록을 가져와서 보여주기
    let id = post[fields[0]]; //아이디 번호
    let target = this;
    showComments(id, target);
  })
  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = post[fields[i]];
    span.setAttribute('class', 'data-' + fields[i]);
    div.appendChild(span);
    div.setAttribute('class', 'post')

  }
  return div;
}

//초기 db 호출
const xhtp = new XMLHttpRequest();
xhtp.open('get', 'http://localhost:3000/posts'); //서버의 요청할 페이지 지정
xhtp.send(); //실제 요청.
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  console.log(data);
  let fields = ['id', 'title', 'author'];
  data.forEach(function (item, idx, ary) {
    let div = makeRow(item);
    document.querySelector('#data-container').appendChild(div);
  })
  console.log("포이치 전 " + data);
};


function showComments(val, target) {
  const xhtp = new XMLHttpRequest();
  xhtp.open('get', 'http://localhost:3000/comments'); //서버의 요청할 페이지 지정
  xhtp.send(); //실제 요청.
  xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText).filter(item => {
      return item.postId == val;
    })

    console.log(data);
    deleteComments();
    data.forEach(item => {
      let div = makeRow2(item);
      target.appendChild(div);
    })

  }

}
//데이터 한건에 대한 row 생성하는 함수
function makeRow2(post) {
  let fields = ['id', 'content'];
  let div = document.createElement('div');
  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = post[fields[i]];
    span.setAttribute('class', 'data-' + fields[i]);
    div.appendChild(span);
    div.setAttribute('class', 'comments')
  }
  return div;
}

function deleteComments() {
  let div = document.querySelectorAll('.comments')
  div.forEach(item => {
    item.remove();
    console.log("삭제요소"+item);
  })
}
// const person ={
//  name : 'Hong',
//  birth: '1999-09-09',
//  phone: '010-9999-9999' 
// }
// person.name;
// person['birth'];
// const prop ='phone';
// person[prop];