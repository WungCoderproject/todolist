// 요소 변수에 저장하기
const input = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('.submit');
const deleteAllButton = document.querySelector('.deleteall');
const todoList = document.querySelector('ul');

// todo 항목을 추가하는 함수
function addTodo() {
  const todoText = input.value.trim(); // 입력된 텍스트 가져오고 양쪽 공백을 제거합니다.

  if (todoText !== '') { // 입력된 텍스트가 비어있지 않은 경우에만 실행합니다.
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete');

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    input.value = ''; // 입력란을 비웁니다.

    // 삭제 버튼 클릭 시 해당 항목 삭제
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });
  }
}

// 등록 버튼 클릭 시 이벤트 핸들러
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // 새로고침이 되지 않도록 기본 동작을 막습니다.
  addTodo();
  console.log(submitButton + ' 등록버튼실행');
});

// 삭제 버튼 클릭 시 이벤트 핸들러
deleteAllButton.addEventListener('click', function (event) {
  event.preventDefault();
  todoList.innerHTML = ''; // 리스트의 내용을 모두 지웁니다.
  console.log(submitButton + ' 삭제버튼실행');
  alert('삭제완료');
});