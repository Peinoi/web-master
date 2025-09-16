//array3.js

const friends = [{
  name: '김우진',
  phone: '010-1111-2222'
}];
friends.push({
  name: '박은식',
  phone: '010-3333-4444'
})
friends.push({
  name: '김우식',
  phone: '010-5555-6666'
})
// let search = prompt('연락처를 찾을 친구의 입름을 입력>');
let search;
friends.forEach(function (item, idx, ary) {
  if (item.name == search) {

    console.log(`이름은 ${item.name}, 연락처 ${item.phone}`);
  }
})
const maleAry = [];
//data 사원정보
data.forEach(function (item, idx, ary) {
  //   if(item.salary>=5000){
  //   console.log(`이름 ${item.first_name} ${item.last_name}
  // 급여 ${item.salary}`);
  if (item.gender == 'Male') {
    maleAry.push(item);
  }
});
console.log(maleAry.sort(function(a,b){
  if(a.salary>b.salary){
    return -10;
  }else{
    return 100;
  }
}));

console.log(['사과','복숭아','수박','오렌지'].sort());
console.log(['사과','복숭아','수박','오렌지'].sort().reverse());
console.log([10,34,23,1,100].sort(function(a,b){
  if(a<b){
    return -10;
  }else{
    return 100;
  }
}));