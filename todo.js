const addBtn = document.querySelector("btn");
const lists = document.getElementById("inp");
const todoContainer = document.getElementById("list-items");


function addItem(){
if (lists.value === '') {
    alert("Hey, you cannot miss a to-do!");
} else {
    let li = document.createElement("li");
    li.innerHTML = lists.value;
    todoContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
}

lists.value = "";
saveItems();
};

todoContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveItems();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveItems();
    }
}, false);

function saveItems(){
    localStorage.setItem("data",todoContainer.innerHTML);
}

function showItems(){
    todoContainer.innerHTML = localStorage.getItem("data");
}

showItems();

