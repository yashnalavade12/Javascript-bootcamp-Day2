//  Key values
const myObject = {
    "name": "Yash",
    "age" : 20,
    "isStudent": true,
    "hobbies": ["travelling","coding"],
    "address": {
        "city": "Mumbai",
        "zipcode":"400075"
    }
}
console.log(`name: ${myObject.name}`);
console.log(`Hobbies: ${myObject.hobbies[0]}`)
console.log(`Zipcode:${myObject.address.zipcode}`);

// Array Manipulation
let arr=[]
for(i=0;i<=100;i++){
    arr.push(i*3)
}
console.log(arr)
let arr1 = []
for(i=0;i<arr.length;i++)
    if(i%5==0){
        arr1.push(i)
    }
console.log(arr1)

let sum = 0;
for (let j =0 ;j<arr1.length;j++){
    sum+=arr1[j];
}
console.log("Sum of arr1 values: ",sum);

for(i=1;i<=100;i++) 
    a.push(i)
a =[2,3,4,5,6]
[3,6,8,9].reduce((a,x)=>a+x)
function abc(x){return x*3}

a = [3,4,-5,6,7]
a.reduce(((a,x)=>{
    if(x>0){
        return a+x 
    }
    else{
        return a
    }
}))