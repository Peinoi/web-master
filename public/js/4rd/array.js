//array.js
const obj ={
  name:'홍길동',
  age:20,
  showInfo:function(){
    return `이름은 ${obj.name}, 나이는 ${obj.age}`
  }

}

const fruits = ['사과', '복숭아']; //배열 크기. fruits.length
fruits[fruits.length]='배';
fruits[fruits.length]='수박';
fruits[0]='포도'; //0번째에 덮어쓰기
delete fruits[0]; // 0번째 삭제

//메소드. 추가(push), 삭제(pop)
fruits.push('메론'); //맨끝에 추가
fruits.pop();//맨끝에 하나 삭제

fruits.unshift('메론');//맨 앞에 추가
fruits.shift();//배열 첫번째 요소를 꺼낸후 결과값으로 반환


fruits.splice(1,1);//인덱스 위치, 삭제할 갯수,
fruits.splice(0,1,'사과');//[사과,배,참외]
fruits.splice(1,0,'수박');//[사과,수박,배,참외]
fruits.splice(1,3,'수박');//[사과,수박]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}










