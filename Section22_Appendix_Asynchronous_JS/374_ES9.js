const animals = {
    tiger: 23,
    lion : 4,
    monkey : 67
}

const {tiger, ...rest} = animals;

console.log(tiger); //23
console.log(rest); //{ lion: 4, monkey: 67 }

const arr = [1,2,3,4,5];
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}

console.log(sum(...arr)); //15

function objectSpread(p1,p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

console.log(objectSpread(tiger, rest));
