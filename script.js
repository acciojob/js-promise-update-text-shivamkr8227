//your JS code here. If required.
function sayhello(){
	return new promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello world");
		})
	});
}
const outpt=document.getElementById("output");
sayhello().then((message)=>{
	outpt.textContent=message;
});