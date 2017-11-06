"use strict";

/**
 * Add container message about status form.
 */

/*export*/ function addMsgForm (status) {
  var msg = {
    success: {
      title: "Ваша заявка отправлена успешно!",
      text: "Наш менеджер свяжется с Вами в ближайшее время."
    },
    error: {
      title: "К сожалению, произошла ошибка",
      text: "Пожалуйста, попробуйте через некоторое время."
    }
  };

  var containerMsgForm = document.createElement("div");
  containerMsgForm.classList.add("status-send-form");
  containerMsgForm.classList.add(status);
  containerMsgForm.innerHTML =
    `<p class="status-send-form__title">${msg[status].title}</p>
     <p class="status-send-form__text">${msg[status].text}</p>`;

  document.body.appendChild(containerMsgForm);

  removeMsgForm(containerMsgForm);
}

/**
 * Remove container message about status form..
 */

function removeMsgForm (el) {
  setTimeout(function () {
    document.body.removeChild(el);
  }, 3000);
}