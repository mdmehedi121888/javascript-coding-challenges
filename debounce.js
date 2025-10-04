// debounce technique

let button = document.getElementById("clickButton");

function debounce(fn, delay) {
  let timeOutId;

  return function () {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    alert("the button is clicked");
  }, 500)
);

let searchField = document.getElementById("textInput");
let paragraphField = document.getElementById("paragraph");

function debounce2(fn, delay) {
  let timeOutId;

  return function () {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

searchField.addEventListener(
  "keyup",
  debounce2(function () {
    paragraphField.textContent = searchField.value;
  }, 500)
);
