// function x(){
//     Promise.reject('x')
//    return Promise.resolve('y');
// }
// async function log(){
//     const val=await x();
//     console.log(val);
// }
// log();

//case2.
const promise=new Promise((resolve,reject)=>{
    resolve('a');
})
setTimeout(()=>{
    console.log('b');
})
promise.then((msg)=>{
    console.log(msg);
})