const promise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        resolve('this is my resolve data')
    },3000);
    
});

console.log('before');

promise.then((data)=>{
console.log(data)
}).catch(()=>{});


promise.then((data)=>{
    console.log(data)
    }, ()=>{});
    


console.log('after');