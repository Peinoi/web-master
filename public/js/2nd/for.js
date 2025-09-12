//반복문.
let sum = 0;
sum = 3;
// 3 * 9 =27 
//<table>
//<thead>
//<tr><th>asfdsfsdf</th></tr></thead>
//<tbody><tr><td>sfdsfweg</td></tr></tbody>
//</table>
document.writeln(`<table class="table table-striped">`);
document.writeln(`
  <thead><tr>
          <th>단수</th>
          <th>연산자</th>
          <th>배수</th>
          <th>=</th>
          <th>결과</th>
          </tr></thead>
  `);
for (let i = 1; i <= 9; i = i + 1) {
  // document.writeln(`<p>${sum} x ${i} = ${sum*i}</p>`);
  document.writeln(`<tr>
                      <td>${sum}</td> 
                      <td>X</td>
                      <td>${i}</td>
                      <td>=</td>
                      <td>${sum*i}</td>
                      </tr>
    `)

}
document.writeln(`</table>`);