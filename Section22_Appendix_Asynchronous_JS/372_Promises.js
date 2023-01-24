// const promise = new Promise((resolve, reject)=>{
//    if(true){
//     resolve('Success');
//    }
//    else{
//     reject('Error');
//    } 
// })

// // promise
// // .then(result =>{
// //     throw Error
// //     return result;
// // })
// // .then(result2 => {
// //     console.log(result2);
// // })
// // .catch(err => {
// //     console.log(err);
// // })


// // promise
// // .then(result => result + '!')
// // .then(result2 => result2 + '?')
// // .catch(err => console.log(err))
// // .then(result3 => console.log(result3 + "!"));


// //basically where we put catch it only going to check the err before that



// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 100, 'HI')
// })


// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, 'LOL')
// })


// const promise4 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 3000, 'Is it me you are loolking for')
// })

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => {
//     console.log(values);
// })

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
})).then(result => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
})

//fetch simply returns a promise.