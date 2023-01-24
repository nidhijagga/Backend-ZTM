// const mission = "learn";
const mission = process.argv[2];

if(mission === "learn"){
    console.log('Time to write some Node Code!');
}
else{
    console.log('Is ' + mission + ' really more fun?');
}


//process.argv

// console.log(process.argv);

process.argv.forEach((val, index) => {
    console.log(`${index} : ${val}`);
});