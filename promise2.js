function promise(a,b){
    return new Promise(function(reslove,rejection){
        console.log("fetching data,please wait...");
        var c=a/b;
        setTimeout(()=>{
            
            if(a,b){
                console.log("get result "+c);
            }else{
                console.log("failed to get result");

            }
        },2000)
    });
}
let onResolve=(result)=>{
console.log(result);
}
let onReject=(eorr)=>{
    console.log(error);
}
promise(9,0).then(onResolve).catch(onReject);