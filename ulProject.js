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
	})
}
