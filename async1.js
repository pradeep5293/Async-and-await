function randomAsyncFunction(callback){
const time=Math.floor(Math.random()*100);
const x=setTimeout(()=>{
    console.log("finished!");
    clearTimeout(x);
    callback();
},time);

}
function asyncWithCallback(callback){
    randomAsyncFunction(()=>{
        callback();
    });
}
asyncWithCallback(()=>{
    console.log("cvbd");
});