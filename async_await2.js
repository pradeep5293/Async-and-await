function randomAsyncFunction(callback){
    const randomDelay=Math.floor(Math.random()*1000);
    setTimeout(()=>{
        console.log('finished');
        callback();
    },randomDelay);
}
async function asyncWithCallback(callback){
    return new Promise((resolve)=>{
        randomAsyncFunction(()=>{
            resolve();
        });
    }).then(()=>{
        callback();
    });
}
asyncWithCallback(()=>{
    console.log("ccvs");
})