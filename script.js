//your JS code here. If required.
let comp=true;
function sayhello(){
	return new promise((resolve)=>{
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