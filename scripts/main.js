var contentShowed = document.querySelector('.content__showed');
var contentInserted = document.querySelector('.content__inserted');
console.log(contentShowed);

var handleChangeContent = function(event) {
    contentShowed.textContent= asdcontentInserted.value;
}

contentInserted.addEventListener('input', handleChangeContent);