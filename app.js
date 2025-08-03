// Cowsay Code
const cowsay =require("cowsay");
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
const yash = 12
jagga = 999
console.log(jagga)

// Greeting code
function greet(name){
    let message = `Hello,${name}!`;
    return message
}
const greeting = greet("jagga");
console.log(greeting)

// Iteration code
let counter = 0;
while(counter<3){
    console.log(`loop iteration: ${counter}`);
    counter +=1;

}
console.log("While loop finished")

// fruits indexing
const fruits = ["Apple","Banana","cherry"];
for ( let i = 0; i<fruits.length;i++){
const fruit = fruits[i];

console.log(`Fruits at index ${i} is ${fruits}`);
}

// calculating area of square
function calculateArea(length,width =1){
    return length * width;
}

const rectangleArea = calculateArea(10,5);
console.log(`Area od a 10x5 rectangle is: ${rectangleArea}`);

const squareArea = calculateArea(8);
console.log(`Area of a Square with side 8 (using default width) is:  ${squareArea}`);
const getsum =function(a,b) { return a+b};

const sum = getsum(15,60);
console.log(`The sum of 15 and 20 is : ${sum}`);

const multiply = (x,y)=> x * y ;

//  Sum of 1000 numbers
   let sum = 0;
   for(let i = 0;i< 1000;i++){
    if(i%3 == 0 || i%5 == 0)
        sum +=i;
   }

console.log("their sum is: "+sum)

// Factorial code
let f1=1 , f2=2
let evenf = 0
while(f2<4000000){
if(f2 %2 == 0){
    evenf +=f2;
}
let nextf = f1 + f2
f1 = f2;
f2 = nextf;
}
console.log("The fibonacci of even number: ",evenf)

// Factorizations
let num = 600851475143;
let factor = 2;
let lastFactor = 1;

while (num > 1) {
    if (num % factor === 0) {
        lastFactor = factor;
        num = num / factor;
        while (num % factor === 0) {
            num = num / factor;
        }
    }
    factor++;
}

console.log(`The largest prime factor is: ${lastFactor}`);

let a =1;
for (let i=1;i<5;i++){
    a =a*i;
};
console.log(`${a}`);