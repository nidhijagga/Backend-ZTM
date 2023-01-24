// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(console.log)

//async await

async function fetchUsers(){
    const f = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await f.json();
    // console.log(data);
    console.log(await f.json());
}

fetchUsers();



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

getData();