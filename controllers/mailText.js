"use strict";

var text = (title, nameUser, phoneUser) => {
  return `
    Заявка с сайта Погреб (основная) (pogreb.in.ua)
    ${title}
  
    Имя - ${nameUser}
    Телефон - ${phoneUser}
  `
};

module.exports = {text};