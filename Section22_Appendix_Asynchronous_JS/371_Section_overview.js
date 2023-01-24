setTimeout(()=>{
    console.log('1');
}, 0);
setTimeout(()=>{
    console.log('2');
}, 10);

Promise.resolve('hi').then((data)=>{console.log('2', data)})

console.log('3');