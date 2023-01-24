//finally
//It works no matter what, even if we get the error

// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums"
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
// })).then(result => {
//     throw Error;
//     console.log(result[0]);
//     console.log(result[1]);
//     console.log(result[2]);
// }).catch(err => console.log(err))
// .finally(data => console.log('extra', data))


//for await of

const loopThroughUrls = url =>{
    for(url of urls) {
        console.log(url);
    }
}


const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]


const getData = async function(){
    const [ users, posts, albums ] = await Promise.all(urls.map(url => {
        return fetch(url).then(res => res.json())
    }))
    console.log("Users : ", users);
    console.log("Posts : ", posts);
    console.log("Albums : ", albums);
}

loopThroughUrls(urls);


const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}

getData2(urls);