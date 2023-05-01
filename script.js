//your JS code here. If required.

// function sayhello(comp){
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			if(comp)
// 			{
// 				resolve("Hello, world!");
// 			}
// 			else{
// 				reject("Error");
// 			}
// 		},1000);
// 	});
// }
// const outpt=document.getElementById("output");
// let protrue=(messsage)=>{
// 	outpt.textContent=message;
// }
// let profalse=(error)=>{
// 	console.log(error);
// }
// sayhello(true).then(protrue).catch(profalse);

const outputElement = document.getElementById("output");

function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

delayedMessage().then((message) => {
  outputElement.textContent = message;
});