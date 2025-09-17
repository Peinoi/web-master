//setInteval.js
//샘플 데이터 삽입
document.querySelector('table').remove();
let str = `Lorem ipsum dolor`;
let strAry = str.split(" "); //구분자를 ' '기준으로 문자열 배열로 생성
const outer = document.querySelector('div.outer');
//화면 출력
strAry.forEach(function (item, idx, ary) {
  let div = document.createElement('div');
  div.innerText = item;
  div.setAttribute('class', 'inner');
  outer.appendChild(div);
});
//화면 찾기

let timing = 3;
let cnt = document.querySelectorAll('div.inner').length;

//이벤트(찾기 버튼 클릭하면 alert('클릭'))
document.querySelector('#search_Word')
  .addEventListener('click', function () {

    let search = document.querySelector('#user_value').value;
    let msg = false;
    document.querySelectorAll('div.inner').forEach(function (item) {

      if (item.innerHTML == search) {
        //item.style.backgroundColor='white';
        item.remove();
        msg = true;
      }
    });
    cnt = document.querySelectorAll('div.inner').length;

    if (timing > 0 && cnt == 0) {
      alert('성공');
    } else if (!msg) {
      alert('찾는 값이 없습니다.');
    } else {
      alert('같은 값이 있습니다.');
    }
    document.querySelector('#user_value').value = '';

  })

setInterval(function () {
  //console.log(timing--);
  if (timing == 0 && cnt > 0) {
    alert('실패');
    
  }else if(timing==0){
    document.querySelector('label').innerHTML = timing;
    
  }
  timing--;
}, 1000); //지정 시간 마다 무한 반복