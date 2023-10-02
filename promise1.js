const delay = (time) => {
    // Write the logic here
    return new Promise((resolve)=>{
        setTimeout(resolve,time);
    });
};
const counter=()=>{
    let isCounting=false;
    let count=0;
    let interval;
    const start=()=>{
        if(!isCounting){
            let isCounting=false;
            interval=setInterval(()=>{
                console.log(count);
                count++;
            },1000);
        }
    };
    const stop=()=>{
        if(isCounting){
            clearInterval(interval);
            isCounting=false;
        }
    };
    return{
        start,
        stop,
    };
};
   
let count = counter()

count.start()
setTimeout(() => {
    count.stop()
},6000)