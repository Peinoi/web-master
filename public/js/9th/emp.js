 //http://localhost:3000/emp => json데이터.
 fetch('http://localhost:3000/emp/ALL/ALL/-1')
   .then(response => response.json())
   .then((result) => {
     // console.log(result);
     result.forEach((item) => {

       let tr = makeRow(item);
       document.querySelector('#list').appendChild(tr);
     });
   })
   .catch((err) => console.log(err));

 //이벤트. 등록 기능
 console.log(document.forms);
 document.forms[0].addEventListener('submit', function (e) {
   e.preventDefault();
   let empno = document.getElementById('empno').value;
   let ename = document.getElementById('ename').value;
   let job = document.getElementById('job').value;
   let hiredate = document.getElementById('hiredate').value;
   let deptno = document.getElementById('deptno').value;
   //console.log(empno,ename,job,hiredate,deptno);

   //json 포맷으로 서버로 전달
   fetch('http://localhost:3000/emp', {
       method: 'post',
       headers: {
         'Content-Type': 'application/json; charset=utf-8'
       },
       body: JSON.stringify({
         empno,
         ename,
         job,
         hiredate,
         deptno
       }),
     })
     .then(response => response.json())
     .then(result => {
       console.log(result);
     })
     .catch((err) => {
       console.log(err);
     })

   document.getElementById('empno').value = '';
   document.getElementById('ename').value = '';
   document.getElementById('job').value = '';
   document.getElementById('hiredate').value = '';
   document.getElementById('deptno').value = '';
 })

 //검색 기능 
 document.forms[1].addEventListener('submit', function (e) {
   e.preventDefault();
   const ename = document.getElementById('search-ename').value || 'ALL';
   //값이 있으면 value값 없으면 all
   const job = document.getElementById('search-job').value || 'ALL';
   const deptno = document.getElementById('search-deptno').value || '-1';
   let url = `http://localhost:3000/emp/${ename}/${job}/${deptno}`;

   fetch(url)
     .then(response => response.json())
     .then(result => {
       console.log(result);
       document.querySelector('#list').innerHTML= '';//기본목록비우기
       result.forEach((item)=>{
          let tr = makeRow(item);
          document.querySelector('#list').appendChild(tr);
       })
     })
     .catch((err) => {
       console.log(err);
     });

 })
 // 사원정보 => row 생성.
 function makeRow(employee) {
   let fields = ['EMPNO', 'ENAME', 'JOB', 'SAL','DNAME'];
   let tr = document.createElement('tr');
   tr.setAttribute("data-eno", employee.EMPNO);
   fields.forEach((item) => {
     let td = document.createElement('td');
     td.innerHTML = employee[item];
     tr.appendChild(td);
   })
   let btn = document.createElement('button');
   btn.innerHTML = "삭제";
   let td = document.createElement('td');
   btn.addEventListener('click', deleteFunc);
   td.appendChild(btn);
   tr.appendChild(td);
   return tr;
 }

 //삭제 버튼 클릭시 실행할 이벤트 핸들러.
 function deleteFunc(e) {

   let thisTr = this.parentElement.parentElement;
   let eno = this.parentElement.parentElement.dataset.eno;
   fetch(`http://localhost:3000/emp/` + eno)
     .then(response => response.json())
     .then(result => {
       if (result.rowsAffected) {
         alert("성공");
         thisTr.remove();
       } else {
         alert("실패");
       }
     })
     .catch((err) => {
       console.log(err)

     })
 }