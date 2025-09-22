//covid.js

const url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=6c91f808c17d233878921c26f88746e1690dee4f4832abcbd133f90b9ac340ee';
let total = [];
fetch(url)
  .then((resp) => resp.json()) //json포멧 -> 자바스크립트 객체.
  .then((result) => {
    total = result.data;
    showPageList(3);
  })
  .catch((err) => console.log(err));

//건수에 따라 페이징 목록 1 ~ 15 ~ 29


function makePagingList() {
  const paging = {
    currentPage: 1,
    startPage: 1,
    endPage: 10,
    prev: false,
    next: false,
    initPage(page = 1, totalCnt = 284) {
      let realEnd = Math.ceil(totalCnt / 10);
      this.currentPage = page;
      this.endPage = Math.ceil(page / 10) * 10;
      this.startPage = this.endPage - 9;
      this.prev = this.startPage == 1 ? false : true; //이전 10개의 페이지 존재 여부
      // this.next = this.end > realEnd ? realEnd : this.end; //이후 10개 페이징 존재 여부
      this.next = this.endPage < realEnd ? true : false;//이후 10개 페이징 존재 여부
    }
  };
  paging.initPage(7);
  console.log(paging);
  //ul tag
  let target = document.querySelector("ul.pagination");
  target.innerHTML = '';
  //이전페이징 생성.
  if (paging.prev) {
    let li = document.createElement('li');
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = "Previous";
    a.className = "page-link";
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement('li');
    li.className = "page-item disabled";
    let a = document.createElement('a');
    a.innerText = "Previous";
    a.className = "page-link";
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  }
  //페이징 생성

  for (let s = paging.startPage; s <= paging.endPage; s++) {
    let li = document.createElement('li');
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = s;
    a.className = "page-link";
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  }

  //이후 페이지 생성
  if (paging.next) {
    let li = document.createElement('li');
    li.className = "page-item";
    let a = document.createElement('a');
    a.innerText = "Next";
    a.className = "page-link";
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  } else {
    let li = document.createElement('li');
    li.className = "page-item disabled";
    let a = document.createElement('a');
    a.innerText = "Next";
    a.className = "page-link";
    a.setAttribute('href', '#');
    li.appendChild(a);
    target.appendChild(li);
  }

  pageLinkEvent();
}
makePagingList();

//화면의 a링크 생성
function pageLinkEvent() {
  document.querySelectorAll('a.page-link').forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let page = item.innerHTML;
      showPageList(page);
    })
  })
}
pageLinkEvent();


//페이지 목록 출력
function showPageList(page = 1) {
  document.querySelector('#centerList').innerHTML='';
  let start = (page - 1) * 10;
  let end = page * 10;
  total.filter(item => item.id > start && item.id <= end)
    .forEach((center) => {
      // console.log(center);
      let tr = makeRow(center);
      document.querySelector('#centerList').appendChild(tr);
    });
}


//센터 -> 1건 화면 출력
function makeRow(center) {
  let fields = ['id', 'centerName', 'address', 'sido'];
  let tr = document.createElement('tr');
  for (let field of fields) {
    let td = document.createElement('td');
    td.innerHTML = center[field];
    tr.appendChild(td);
  }
  return tr;
}