"use strict";

/**
 * Create new XMLHttpRequest for post form data to server.
 */

function createRequest(nameForm, nameUser, phoneUser) {
  //Handler for response event
  function reqListener (){
    console.log(this.responseText);
  }

  var formData = {
    nameForm: nameForm,
    nameUser: nameUser,
    phoneUser: phoneUser
  };

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener, true);
  oReq.open("POST", "http://localhost:3000/neworder");
  oReq.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  oReq.send(JSON.stringify(formData));

  oReq.onloadend = function () {
    oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200
      ? addMsgForm("success")
      : addMsgForm("error");
  };
}

/**
 * On submit form.
 */

function handlerForSubmitEvent(event) {
  var form = event.target;
  console.log(`Saving values: name ${form.nameUser.value} and phone ${form.phoneUser.value}`);
  event.preventDefault();

  createRequest(form.name, form.nameUser.value, form.phoneUser.value);
  form.reset();
}

[].forEach.call(document.querySelectorAll("form"), function (element) {
  element.addEventListener("submit", (event) => handlerForSubmitEvent(event));
});
