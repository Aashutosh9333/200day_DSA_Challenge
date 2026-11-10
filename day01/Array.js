const students = [
    "rahul",
    "amit",
    "ganesh",
    "priya",
    "riya"
];
console.log(students[0]);// rahul
console.log(students[3]);//priya


// exmaple2 object 
const Students ={
    name:"Aashutosh",
    age: 22,
    branch: "computer science",
    marks: 90
};

console.log(Students.name);
console.log(Students.marks);


//example3 stack
const stack =[];
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);

stack.pop();

console.log(stack);

// Algorithems
// An algorithems is a sequence of logical steps used to solve a problem 
// find the largest nimber from an array



function findmax(arr){
    let max = arr[0];

    for(let i=1; i< arr.length; i++){
        if(arr[i]>max){
            max =arr[i];

        }
    }
    return max;
}

const numbers =[10,20,30,40,50,80,60];
console.log(findmax(numbers));


//print number from 1 to 10 
//const num = [0];

for (let i =1; i<=10; i++){
console.log(i);
}
