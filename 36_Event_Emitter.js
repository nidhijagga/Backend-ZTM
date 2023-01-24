const EventEmitter = require('events'); //Get the functionality of events.
const celebrity = new EventEmitter();// Create the new event Emitter for celebrity.

// //Subbscribe to celebrity for observer 1
// celebrity.on('race win', () =>{
//     console.log('Congratulations! You are the best.');
// })


// //Subbscribe to celebrity for observer 2
// celebrity.on('race win', () =>{
//     console.log('I could have done better than that');
// })

//Subbscribe to celebrity for observer 1
celebrity.on('race', (result) =>{
    if(result === 'win'){
        console.log('Congratulations! You are the best.');
    }  
})



//Subbscribe to celebrity for observer 2
celebrity.on('race', (result) =>{
    if(result === 'lost'){
        console.log('I could have done better than that');
    }
})


//1st Method, without args.

// celebrity.emit('race win');// we can create new events like this. eg. 'click' event. We here created the race win event.

//2nd Method with args
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');

process.on('exit', ()=>{
    console.log('Process Ends');
})