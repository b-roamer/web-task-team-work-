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
