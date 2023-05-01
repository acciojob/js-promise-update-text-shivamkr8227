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
let protrue=(messsage)=>{
	outpt.textContent=message;
}
let profalse=(error)=>{
	console.log(error);
}
prom(true).then(protrue);
prom(true).catch(profalse);