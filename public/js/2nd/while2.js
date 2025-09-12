//while2
//학생점수를 입력 >> 입력한 점수의 합
//exit입력하면 종료후 출력
let sum=0;
let cnt=0;
while(1){
  let userValue= prompt("숫자를 입력하세요. 종료하려면 exit");
  if(userValue=='exit'){
    document.writeln("총 합계 : "+sum);
    document.writeln(`총인원 : ${cnt} | 평균 : ${sum/cnt}` );
    break;
  }
  sum += parseInt(userValue);
  cnt++;
}

