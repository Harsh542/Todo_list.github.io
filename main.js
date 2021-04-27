let input = document.getElementById('input');
let add = document.getElementById('Add');
let list = document.getElementById('list');

add.addEventListener('click',function(){
var paragraph = document.createElement('p');
paragraph.innerText = input.value;
list.appendChild(paragraph);
paragraph.classList.add("p-style");
input.value = "";
paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
})
paragraph.addEventListener('dblclick',function(){
    list.removeChild(paragraph);
})
})
