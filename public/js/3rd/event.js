//event.js
//이벤트를 등록할 요소.
console.log();
let students = [{
  stdNo: 100,
  stdName: "홍길동",
  stdScore: 80
}]; //학생정보 지정. students.length

//이벤트들....
document.querySelector("button#addBtn").
addEventListener('click', function () {
  //사용자 입력값.
  let sno = document.querySelector('#student_no').value;
  let sname = document.querySelector('#student_name').value;
  let score = document.querySelector('#score').value;
  if (sno == '' || sname == '' || score == '') {
    alert("값을 입력해주세요");
    return;
  }
  students[students.length] = {
    stdNo: sno,
    stdName: sname,
    stdScore: score
  }
  console.log(students);
  createStdList();
  //입력항목 초기화
  sno = document.querySelector('#student_no').value = '';
  sname = document.querySelector('#student_name').value = '';
  score = document.querySelector('#score').value = '';
});

//수정 이벤트.
document.querySelector('.addBtn') //선택자.
  .addEventListener('click', function () { //목록에서 tr 전체 선택
    let nodeList = document.querySelectorAll('#list tbody tr');
    let sno = document.querySelector('#student_no').value;
    let sname = document.querySelector('#staudent_name').value;
    let score = document.querySelector('#score').value;
    if(sno==''||sname==''||score==''){
      alert("값을 입력바랍니다.")
      return;
    }
    for (let i = 0; i < nodeList.length; i++) {

      if (nodeList[i].children[0].innerHTML == sno &&
        nodeList[i].children[1].innerHTML == sname) {
        nodeList[i].children[2].innerHTML = score;
      }
    }
    console.log(nodeList.children);
  })

createStdList();
//배열값을 활용해 학생 목록 출력
function createStdList() {

  let str = ``;
  for (let i = 0; i < students.length; i++) {
    str += `<tr onclick='showInfo(event)'>
    <td>${students[i].stdNo}</td>
    <td>${students[i].stdName}</td>
    <td>${students[i].stdScore}</td>
    <td><button class='btn btn-danger' onclick="removeRow(event)">삭제</button></td>
    </tr>`
  }
  document.querySelector('#list tbody').innerHTML = str;
} // end of createStdList
//학생정보 삭제
function removeRow(e) {
  e.target.parentElement.parentElement.remove();

}

function showInfo(e) {

  document.querySelector('#student_no').value = e.target.parentElement.children[0].innerHTML;

  document.querySelector('#student_name').value = e.target.parentElement.children[1].innerHTML;

  document.querySelector('#score').value = e.target.parentElement.children[2].innerHTML;

  //console.dir(e.target.parentElement.children[0].innerHTML);

}

// console.log(
// document.querySelectorAll('button')[0].
// addEventListener('click',function(){}));