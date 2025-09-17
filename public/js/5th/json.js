//json.js
//http://127.0.0.1:5500/public/js/5th/data.json
//http://127.0.0.1:5500/public/js/5th/index.html

const xhtp = new XMLHttpRequest();
xhtp.open('get', 'data.json'); //서버의 요청할 페이지 지정
xhtp.send(); //실제 요청.
xhtp.onload = function () {
  let data = JSON.parse(xhtp.responseText);
  console.log(data);
  let field = ['id','first_name','last_name','gender','salary'];
  data.forEach(function (item, idx, ary) {
    let tr = document.createElement('tr');
    for(let i=0; i<field.length; i++){
      let td = document.createElement('td');
      td.innerHTML = item[field[i]]; 
      tr.appendChild(td);
    }
    document.querySelector('#list').appendChild(tr);
  });
  data.forEach(function(item,idx,ary){
    console.log(item['email']);
  })
};
