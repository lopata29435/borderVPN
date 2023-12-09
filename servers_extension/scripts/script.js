const postBtn = document.querySelector("#post_btn");

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function postBtnHandler() {
    // Используйте let или const для объявления переменных
    let text = document.querySelector("#text").value;

    let url = 'http://127.0.0.1:8000/myapp/api/endpoint/';
    const csrftoken = getCookie('csrftoken');

    let data = { text_data: text };

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(data)
    };

    fetch(url, options).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('POST request successful');  // Исправлена опечатка в слове "alert"
        return response.json();
    }).then(() => {
        // Очищаем поле ввода после успешной отправки запроса
        document.getElementById('text').value = '';
    }).catch(error => {
        alert('POST request failed');
    });
}

postBtn.addEventListener('click', postBtnHandler);
