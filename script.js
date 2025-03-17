const inputbox = document.getElementById("inputbox")
const listcontainer = document.getElementById("listcontainer")
function addtask() {
    if (inputbox.value == '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "❌"; 
        li.appendChild(span);
    }
    inputbox.value =''
    savedata();
}

listcontainer.addEventListener("click", 
    function(e){
    if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    savedata();
    }
    else if(e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    savedata();
    }
    });
    
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}    
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();