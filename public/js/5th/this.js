//this.js

// 1) 함수에서 this -> window 객체 가르킴
// 2) 이벤트에서는 이벤트를 받는 대상을 가르킴.
// 3) 객체에서 객체를 가르킴

// 1) 함수에서 this -> window 객체 가르킴
function sum(n1, n2) {
  console.log(this);
  return n1 + n2;
}
sum(1, 2);

// 2) 이벤트에서는 이벤트를 받는 대상을 가르킴.
document.querySelector('table')
  .addEventListener('click', function (e) {
    console.log(e.target);
    console.log(this);
  })

// 3) 객체에서 객체를 가르킴

const obj = {
  name: 'Hong',
  show: function () {
    console.log(this);
    return `이름은 ${this.name}`;
  }
}
console.log(obj.show());