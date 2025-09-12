//문제 
//학생(학생번호: 101, 학생이름 : "김민수",영어:97,수학;90)
let stu = {
  stuNo: 101,
  stuName: "김민수",
  english: 87,
  math: 90
}
console.log("이름은 " + stu.stuName);
stu.stuName = "김만수";
console.log(stu.stuName + "의 영어점수는 " + stu.english);
let fruits = ["apple", "pitch", "water melon"];
console.log("my favorite fruit first : " + fruits[0]);