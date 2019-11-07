function getTasks(){
	const promise = fetch(`https://repetitora.net/api/JS/Tasks?widgetId=15571`);
	return promise.then((response)=>{
		return response.json();
	});
}
