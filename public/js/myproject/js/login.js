//회원 가입 숨기기
document.querySelector('#adduser_form').classList.add('hidden');

//로그인 버튼
document.querySelector('#login').addEventListener('click', function (e) {
  e.preventDefault();
  const emp_id = document.getElementById('user_id').value;
  const emp_pw = document.getElementById('user_pw').value;
  console.log('로그인');
  if (!emp_id) {
    alert('아이디를 입력해주세요!');
    return;
  }
  if (!emp_pw) {
    alert('비밀번호를 입력해주세요!');
    return;
  }

  // 서버로 로그인 요청
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      emp_id,
      emp_pw,
    }),
  })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        alert(`${result.user.EMP_NAME}님 환영합니다!`);
        console.log('로그인 성공:', result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
        // 로그인 후 페이지 이동 (예: 메인 페이지)
        window.location.href = './main.html';
      } else {
        alert('아이디 또는 비밀번호가 잘못돼었습니다.');
      }
    })
    .catch(err => {
      console.error('로그인 요청 실패:', err);
    });
});

//회원가입창 불러오기
document.querySelector('#adduser').addEventListener('click', function (e) {
  e.preventDefault();
  login_clear();
  // 숨기기
  document.querySelector('#login_form').classList.add('hidden');
  // 다시 보이기
  document.querySelector('#adduser_form').classList.remove('hidden');
  console.log('가입');
});

document.getElementById('back_btn').addEventListener('click', function (e) {
  addUser_clear();
  // 숨기기
  document.querySelector('#adduser_form').classList.add('hidden');
  // 다시 보이기
  document.querySelector('#login_form').classList.remove('hidden');
});

//회원 가입
document.querySelector('#add_btn').addEventListener('click', function (e) {
  e.preventDefault();
  const emp_id = document.getElementById('add_user_id').value;
  const emp_pw = document.getElementById('add_user_pw').value;
  const emp_name = document.getElementById('user_name').value;
  const deptno = document.getElementById('deptno').value;
  const hiredate = document.getElementById('hiredate').value;
  if (!emp_id) {
    alert('아이디를 입력해주세요!');
    return;
  }
  if (!emp_pw) {
    alert('비밀번호를 입력해주세요!');
    return;
  }
  if (!emp_name) {
    alert('이름을 입력해주세요!');
    return;
  }
  if (deptno == 'none') {
    alert('부서를 선택 해주세요!');
    return;
  }
  if (!hiredate) {
    alert('날짜를 입력해주세요!');
    return;
  }
  //json 포맷으로 서버로 전달
  fetch('http://localhost:3000/emp', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      emp_id,
      emp_pw,
      emp_name,
      deptno,
      hiredate,
    }),
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });

  console.log(emp_id);
  console.log(emp_pw);
  console.log(emp_name);
  console.log(deptno);
  console.log(hiredate);

  // document.getElementById('emp_id').value = '';
  // document.getElementById('add_user_pw').value = '';
  // document.getElementById('emp_name').value = '';
  // document.getElementById('deptno').value = '';
  // document.getElementById('hiredate').value = '';
});

function addUser_clear() {
  document.getElementById('add_user_id').value = '';
  document.getElementById('add_user_pw').value = '';
  document.getElementById('user_name').value = '';
  document.getElementById('deptno').value = '';
  document.getElementById('hiredate').value = '';
}
function login_clear() {
  document.getElementById('user_id').value = '';
  document.getElementById('user_pw').value = '';
}
