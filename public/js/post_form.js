"use strict";

/**
 * Create new XMLHttpRequest for post form data to server.
 */
function createRequest(name, phone) {
  var xhr = new XMLHttpRequest();

  var body = `name:${encodeURIComponent(name)}&phone:${encodeURIComponent(phone)}`;

  xhr.open("POST", "./index.html", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(body);
    }
  };

  xhr.send(body);
}

[].forEach.call(document.querySelectorAll("form"), function (element) {
  element.addEventListener("submit", function (event) {
    var form = event.target;
    var name = form.children[0].lastElementChild.value;
    var phone = form.children[1].lastElementChild.value;

    createRequest(name, phone);
    event.preventDefault();
  });
});


/*function postRequest() {
  var
}*/
