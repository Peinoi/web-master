//dom.js
//createElement() <= 요소 생성
//appendChild() <= 부모-자식 관계.
//innerText, innerHtml, textContent
//요소
let students = [{
  stdNo: 100,
  stdName: "홍길동",
  stdScore: 80
}, {
  stdNo: 200,
  stdName: "김길동",
  stdScore: 83
}];

for (let prop in students[0]) {
  console.log(prop, students[0][prop]);
}

function createStdList() {
  for (let i = 0; i < students.length; i++) {
    let tr = makeTr(students[i]);
    document.querySelector('#list tbody').appendChild(tr);
  }
}

createStdList();
//등록
document.querySelector('#addBtn').addEventListener('click', function () {
  const newElement = {
    stdNo: document.querySelector('#student_no').value,
    stdName: document.querySelector('#student_name').value,
    stdScore: document.querySelector('#score').value
  }

  let tr = makeTr(newElement);
  document.querySelector('#list tbody').appendChild(tr);
  //입력항목 초기화
  sno = document.querySelector('#student_no').value = '';
  sname = document.querySelector('#student_name').value = '';
  score = document.querySelector('#score').value = '';
})

function makeTr(newElement) {
  let tr = document.createElement('tr');
  for (let prop in newElement) {
    let td = document.createElement('td'); //<td></td>
    td.innerHTML = newElement[prop];
    tr.appendChild(td); // <tr><td>100</td></tr>
  }
  let td = document.createElement('td'); //<td></td>
  let btn = document.createElement('button'); //<td></td>
  btn.addEventListener('click', function (e) {
    console.log(e);
    e.target.parentElement.parentElement.remove();
  });
  btn.setAttribute('class', 'btn btn-danger'); //Attribute => <button id="addBtn" class="btn btn-danger">
  btn.innerHTML = '삭제';
  td.appendChild(btn);
  tr.appendChild(td); // <tr><td>버튼</td></tr>
  //생성한 tr 반환
  return tr;
}

//수정
document.querySelector('.addBtn').addEventListener('click',function(){
  let sno = document.querySelector('#student_no').value;
  let sname = document.querySelector('#student_name').value;
  let score = document.querySelector('#score').value;

  let nodeList = document.querySelectorAll('#list tbody tr');
  console.log(nodeList);
  for(let i=0; i<nodeList.length; i++){
    let no = nodeList[i].children[0].innerHTML;
    let name = nodeList[i].children[1].innerHTML;
    if(no == sno && name==sname){
      nodeList[i].children[2].innerHTML = score;
      console.log(nodeList[i].children[2].innerHTML);
    } 

  }

})