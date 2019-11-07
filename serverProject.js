function getTasks(){
	const promise = fetch(`https://repetitora.net/api/JS/Tasks?widgetId=15571`);
	return promise.then((response)=>{
		return response.json();
	});
}
function createTasks(title){
	let promise = fetch(`https://repetitora.net/api/JS/Tasks?widgetId=15571&title=${title}`,{
		method :'POST',
		headers: {
   			 'Content-Type': 'application/json;charset=utf-8'
  		},
   		body: JSON.stringify(title)
	})
	return promise.then((response)=>{
		return response.json();
	})
}
