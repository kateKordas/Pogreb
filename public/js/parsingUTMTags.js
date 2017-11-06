"use strict";

/**
 * Parsing UTM tags.
 */

function parsingUTM () {
  
  var path = window.location.href.split("?");

  if (path[1]) {
    return path[1].split("&")
  } else {
    return null;
  }
}