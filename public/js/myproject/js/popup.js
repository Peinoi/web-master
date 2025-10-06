// -----------------
// 팝업 상세보기
// -----------------
function showPostDetail(id) {
  // 1️⃣ 모든 데이터 배열을 합쳐 검색 (게시판 + 메일)
  const allData = [...mainList, ...myList, ...sentList, ...receivedList];
  const item = allData.find(x => x.POST_ID === id || x.MSG_ID === id);

  if (!item) {
    alert('해당 게시물을 찾을 수 없습니다.');
    return;
  }

  // 2️⃣ 제목/내용 표시
  document.getElementById('popup_title').textContent = item.TITLE || '제목 없음';
  document.getElementById('popup_content').textContent = item.CONTENT || '내용이 없습니다.';

  // 3️⃣ 팝업 표시
  document.getElementById('popup_bg').classList.remove('hidden');
}

// -----------------
// 팝업 닫기
// -----------------
document.getElementById('popup_close').addEventListener('click', () => {
  document.getElementById('popup_bg').classList.add('hidden');
});
