let students = [{
  stdNo: 100,
  stdName: "홍길동",
  stdScore: 80
}, {
  stdNo: 200,
  stdName: "김길동",
  stdScore: 83
}];
startMake();
function startMake() {
  for (let i = 0; i < students.length; i++) {
    let tr= create(students[i]);
    document.querySelector('#list tbody').appendChild(tr);

  }
}

document.querySelector('#addBtn').addEventListener('click',function(){
  const newElement = {
    stdNo: document.querySelector('#student_no').value,
    stdName: document.querySelector('#student_no').value,
    stdScore: document.querySelector('#score').value
  }

  let tr= create(newElement);
  document.querySelector('#list tbody').appendChild(tr);
})

function create(newElement) {

  let tr = document.createElement('tr');
  for (let prop in newElement) {
    let td = document.createElement('td');
    td.innerHTML = newElement[prop];
   
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = "삭제";
  btn.addEventListener('click',function(e){
    e.target.parentElement.parentElement.remove();
  })
  td.appendChild(btn);
  tr.appendChild(td);

  return tr;
}