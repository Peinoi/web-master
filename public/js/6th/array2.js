//array2.js


const xhtp = new XMLHttpRequest();
xhtp.open('get', '../5th/data.json');
xhtp.send();
xhtp.onload = function () {
  // console.log(JSON.parse(xhtp.responseText));
  //Q filter,map => 여자 사원 => 사번, 이름(풀네임), 급여
  let array = JSON.parse(xhtp.responseText).filter(item =>{
    return item.gender == "Female"
  })
  const feAry = array.map(item => {
    let {
      id,
      first_name,
      last_name,
      salary,
      gender
    } = item;
    let name = item.first_name + "-" + item.last_name;
   
      return {
           id,
           name,
           salary,
           gender
      }
     
     
  })
  console.log(feAry);


}
