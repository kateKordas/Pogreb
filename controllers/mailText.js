"use strict";

var text = (title, nameUser, phoneUser, utmTags) => {
  if (utmTags) {
    return `
      Заявка с сайта Погреб (основная) (pogreb.in.ua)
      ${title}
    
      Имя - ${nameUser}
      Телефон - ${phoneUser}
      
      UTM метки:
      ${utmTags[0]}
      ${utmTags[1]}
      ${utmTags[2]}
      ${utmTags[3]}
    `
  } else {
    return `
      Заявка с сайта Погреб (основная) (pogreb.in.ua)
      ${title}
    
      Имя - ${nameUser}
      Телефон - ${phoneUser}
      
      UTM меток не найдено.
    `
  }
};

module.exports = {text};