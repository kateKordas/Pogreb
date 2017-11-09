"use strict";

import { parsingUTM } from "./parsingUTMTags";
import { addMsgForm } from "./containerMsgSendForm";

/**
 * Create new XMLHttpRequest for post form data to server.
 */

var createRequest = (nameForm, nameUser, phoneUser) =>{
  //Handler for response event
  function reqListener () {
    console.log(this.responseText);
  }

  var formData = {
    nameForm: nameForm,
    nameUser: nameUser,
    phoneUser: phoneUser,
    utmParams: parsingUTM()
  };

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener, true);
  oReq.open("POST", "http://localhost:3000/neworder");
  oReq.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  oReq.send(JSON.stringify(formData));

  oReq.onloadend = () => {
    oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200
      ? addMsgForm("success")
      : addMsgForm("error");
  };
};

/**
 * Handler for submit form.
 */

export var handlerForSubmitEvent = (event) => {
  var form = event.target;
  console.log(`Saving values: name ${form.nameUser.value} and phone ${form.phoneUser.value}`);
  event.preventDefault();

  createRequest(form.name, form.nameUser.value, form.phoneUser.value);
  form.reset();
};

/**
 * On submit form.
 */

[].forEach.call(document.querySelectorAll("form"), (element) => {
  element.addEventListener("submit", (event) => handlerForSubmitEvent(event));
});
