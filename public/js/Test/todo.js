//버튼 클릭시 생성
//목록 클릭시 클래스 변경
//삭제 버튼 클릭시 삭제
function newElement() {
  let txt = document.querySelector('#myInput').value;
  if (!txt) {
    return;
  }
 
  let ul = document.querySelector('#myUL');
  let li = document.createElement('li');
  li.innerHTML = txt;
  add_Span(li);
  clicK_Event(li);
  ul.appendChild(li);
  document.querySelector('#myInput').value = ''; 

  //선택 개체를 복사 -> clone
  // let cloned = document.querySelector('#myUL>li').cloneNode(true);
  // let spand = cloned.querySelector('span');
  // cloned.className="btn btn-primay checked";
  // closed.classList.remove('checked');
  // cloned.innerHTML = txt;
  // cloned.appendChild(spand);
  // console.log(cloned);
  // ul.appendChild(cloned);
}


function clicK_Event(eve) {
  //신규 생성 오브젝트에 대한 
  if (eve != null) {
    eve.addEventListener('click', function () {
      let item_Class = eve.getAttribute('class');
      if (item_Class == 'checked') {
        eve.setAttribute('class', '');
      } else {
        eve.setAttribute('class', 'checked');
      }
    })
  }

  //처음 페이지 로드시 클래스 추가
  let li = document.querySelectorAll('li');
  li.forEach(item => {
    item.addEventListener('click', function () {
      let item_Class = this.getAttribute('class');
      if (item_Class == 'checked') {
        item.setAttribute('class', '');
      } else {
        item.setAttribute('class', 'checked');
      }
    })
  })
}


function add_Span(row) {
  //신규 생성 오브젝트에 대한 스팬 추가
  if (row != null) {
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.setAttribute('class', 'close');

    span.addEventListener('click', function (item) {
      row.remove();
      item.stopPropagation(); //상위 요소의 이벤트 차단 vs e.preventDefault(기본기능 차단)
    })
    row.appendChild(span);
  }

  //처음 페이지 로드시 스팬추가
  let li = document.querySelectorAll('li');
  li.forEach(function (e) {
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.setAttribute('class', 'close');

    span.addEventListener('click', function (item) {
      e.remove();
      item.stopPropagation(); //상위 요소의 이벤트 차단 vs e.preventDefault(기본기능 차단)
    })
    e.appendChild(span);
  })
}
clicK_Event();
add_Span();