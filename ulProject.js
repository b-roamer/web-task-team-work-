const getTasksButton= document.querySelector("#get-tasks");
const createTasksButton= document.querySelector("#create-tasks");


getTasksButton.addEventListener("click",() =>{
	const promise = getTasks();
	promise.then(onTasksReceived);
});
createTasksButton.addEventListener("click",()=>{
	createTasks('nhb').then((data) =>{
		console.log(data);
	});
	createTasks('do math').then((data) =>{
	console.log(data);
	});
});
function onTasksReceived(tasks){
	const result = document.querySelector("#itemsGet");
	result.innerHTML="";
	tasks.forEach(task => {
		var li = document.createElement("li");
        var inputValue = task.title;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("items").appendChild(li);
        }
        document.getElementById("myInput").value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
	})
}
