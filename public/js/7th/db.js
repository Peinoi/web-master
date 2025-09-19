//db.js
//추가 버튼.
console.log(document.forms['postForm']);


document.forms["postForm"].addEventListener("submit", function (e) {
  e.preventDefault();
  let title = document.querySelector('[name="title"]').value;
  let author = document.querySelector('[name="author"]').value;
  if (!title || !author) {
    alert("내용, 작성자를 입력해주세요");
    return;
  }
  // ajax. 등록 요청 방식 -> post 
  fetch('http://localhost:3000/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        title,
        author
      }),
    })
    .then(respones => respones.json())
    .then(result => {
      console.log(result);
      let div = makeRow(result);
      document.querySelector('.data-container').appendChild(div);
      document.querySelector('[name="title"]').value = '';
      document.querySelector('[name="author"]').value = '';
    })
    .catch(err => {
      console.log(err)
    })
})

fetch('http://localhost:3000/posts')
  .then(reponse => reponse.json())
  .then(result => {
    // let fields = ['id', 'title', 'author'];
    result.forEach(item => {
      // console.log(item['id']);
      let div = makeRow(item);
      document.querySelector('.data-container').appendChild(div);
    });
  })
  .catch(function (err) {
    console.log(err);
  })


function makeRow(item, show) {
  let fields = ['id', 'title', 'author'];

  let div = document.createElement('div');
  div.addEventListener('click', function (e)  {

    let id = item[fields[0]];
    let target = this;
    console.log(id);
    console.log(target);
    showComments(id, target);
  })
  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = item[fields[i]];
    span.setAttribute('class', `data-${fields[i]}`);
    div.setAttribute('class', 'post')
    div.appendChild(span);
  }
  let btn = document.createElement('btn');
  btn.setAttribute('class', 'btn btn-danger');
  btn.innerHTML = "삭제";
  btn.addEventListener('click', function (e) {
    let delId = item[fields[0]];
    console.log(delId);
    deletePosts(delId);
    e.target.parentNode.remove();
  })
  div.appendChild(btn);
  return div;
}






function deletePosts(value) {
  fetch(`http://localhost:3000/posts/${value}`, {
      method: 'delete'
    })
    .then(reponse => reponse.json())
    .then(result => {
      // result.forEach(item => {
      //   console.log(item['id']);
      //   if (value == item['id']) {
      //     return item;
      //   }
      // });
    })
    .catch(function (err) {
      console.log(err);
    })
}


function showComments(id, ps) {
  fetch('http://localhost:3000/comments')
    .then(respone => respone.json())
    .then(result => {
      let data = result.filter((item) => {
        return item.postId == id
      })
      deleteComments();
      data.forEach(item => {
        let div = makeRow2(item);

        ps.appendChild(div);
      })


    })

}

function makeRow2(obj) {
  let fields = ['id', 'content'];
  let div = document.createElement('div');

  for (let i = 0; i < fields.length; i++) {
    let span = document.createElement('span');
    span.setAttribute('class', `data-${fields[i]}`);
    span.innerHTML = obj[fields[i]];

    div.appendChild(span);
    div.setAttribute('class', 'comments')
  }
  return div;

}

function deleteComments() {
  let comments = document.querySelectorAll('.comments');
  comments.forEach(item => {
    item.remove();
  })
}