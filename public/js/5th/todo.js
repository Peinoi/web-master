//todo.js
let num = '';
for (let i = 0; i < 5; i++) {
  for (let j = i; j < i + 1; j++) {
    num += '*';
  }
  console.log(num);
}
num = '';
for (let i = 0; i < 4; i++) {
  for (let j = i; j < 4; j++) {
    num += '*';
  }
  console.log(num);
  num = '';
}



num = '';
for (let i = 0; i < 5; i++) {
  for (let k = i; k < 4; k++) {
    
      num += " ";
    
  }
  for (let j = 0; j < i+1; j++) {
    num += '*';
  }
  console.log(num);
  num = '';
}

num = '';
for (let i = 0; i < 5; i++) {
  for (let k = i; k < i+i; k++) {
    if (i != 0) {
      num += " ";
    }
  }
  for (let j = i; j < 5; j++) {
    num += '*';
  }
  console.log(num);
  num = '';
}