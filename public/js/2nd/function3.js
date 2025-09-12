
let result = Math.max(140,20);
console.log(result);
let value2=0;

function cul(num1,num2,str){
  let plus=0;
  let gob=0;
  let mainus=0;
  plus = num1+num2;
  gob = num1*num2;
  mainus = num1-num2;
  value2= plus * gob - mainus;
  if(str=="+"){
    return plus;
  }else if(str=="-"){
    return mainus;
  }
}

let value = cul(2,3,"-");
let va = cul(2,5,"+");

console.log("리턴받기 : "+value);
console.log("리턴 안씀 : "+va);