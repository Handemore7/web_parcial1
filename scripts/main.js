/* 
    Al escribir en el input se cambia el contenido del texto por el del input
*/
var contentShowed = document.querySelector('.content__showed');
var contentInserted = document.querySelector('.content__inserted');
console.log(contentShowed);

var handleChangeContent = function(event) {
    contentShowed.textContent= contentInserted.value.toUpperCase();
}

contentInserted.addEventListener('input', handleChangeContent);

/* 
    Al clickear por fuera del input se borra el contenido
*/
var handleClearContent = function(event){
    contentInserted.value = "";
}

contentInserted.addEventListener('change', handleClearContent)