// print number from 1 to 10
for (i=1; i<=15; i++){
    console.log(i);
}

//complexity time O(n) space O(1)

//2 sum of two numbers


function add(a,b){
    return a+b;
}
console.log(add(10,30));

// time O(n) space O(1)

//check wheather a number is even or odd

function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";

    }else{
        return"odd";
    }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(15));

// find the largest number bet two numbers

function findmax(a,b){
    if( a>b){
        return a;

    }else{
        return b;
    }
}
console.log(findmax(50,80));


// find the minimum of two numbers

function findmin (a,b){
    if(a < b){
        return a;

    }else {
        return b;
    }
}
 console.log(findmin(50,80));


 //calculate the total of all element in an array

 function arraySum(arr){
 let sum=0;
 for (let i= 0; i< arr.length; i++){
    sum = sum +arr[i];

 }
 return sum;
}

 
 const numbers =[ 10,20,30,40,50];
 console.log(arraySum(numbers));

 //7. find the maximum element in an array
 //problem : find the maximum element in an array without using Math.max()
 function findMax(arr){
    if(arr.length === 0 ){
        return undefined;
    }
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
 }
 const number =[45,12,89,5,34];
 console.log(findMax(number));

// find the minimum element in array

function findMin(arr){
    if(arr.length === 0){
        return undefined;

    }
    let min = arr[0];

    for (let i=1; i< arr.length; i++){
        if(arr[i] < min){
            min =arr[i];
        }
    }
    return min;
}
const numb = [45,12,89,5,34];
 console.log(findMin(numb));

 // find max
 function findmax(arr){
    if(arr.length === 0){
    return undefined;
 }
 let max =arr[0];

 for(let i=0; i< arr.length;i++){
    if(arr[i]> max){
        max =arr[i];
    }
 }
 return max;
 }
 const nummax = [10,20,50,30,40];

 console.log(findmax(nummax));

 //find min