//조건문
function checkScore() {
  const score = parseInt(document.querySelector("#user_value").value)
  if (score >= 90) {
    console.log("참잘함");
  }
  if (score >= 80) {
    console.log("잘함");
  }
  if (score >= 70) {
    console.log("보통");
  }
  if (score >= 60) {
    console.log("노력");
  } else {
    console.log("낙제");

  }
}
//계산
function calculate(){
  let first =parseInt(document.querySelector('#user1').value);
  let last = parseInt(document.querySelector('#user2').value);
  
  let par = document.querySelector("#oper").value;
  let result;
  switch(par){
    case '+' :
      result = first + last;
      break;
    case '-' :
      result = first - last;
      break;
    case '*' :
      result = first * last;
      break;
    case '/' :
      result = first / last;
     

  }
  document.querySelector('#result').value=result;
  console.log(first+" "+last+" "+par);  

}//end of calculate().

function calculateif(){
  let first =parseInt(document.querySelector('#user1').value);
  let last = parseInt(document.querySelector('#user2').value);
  
  let par = document.querySelector("#oper").value;
  let result;
  if(par=="+"){
    result = first+last;
  }
  else if(par=="-"){
  result = first-last;
  } else if(par=="*"){
  result = first*last;
  } else if(par=="/"){
  result = first/last;
  }
  document.querySelector('#result').value=result;
  console.log(first+" "+last+" "+par);  

}//end of calculate().
