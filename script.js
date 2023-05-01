//your JS code here. If required.

function sayhello(comp){
	return new promise((resolve,reject)=>{
		setTimeout(()=>{
			if(comp)
			{
				resolve("Hello world");
			}
			else{
				reject("Error");
			}
		},1000);
	});
}
const outpt=document.getElementById("output");
sayhello()
	.then((message)=>{
	outpt.textContent=message;
});
.catch((error)=>{
	console.log(error);
});