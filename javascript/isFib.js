/*************************************************************************************************************
1.)	Fibonacci numbers, form  Fibonacci sequence, in which each number is the sum of the two preceding ones
2.)	A number is Fibonacci if and only if one or both of (5*n**2 + 4) or (5*n**2 – 4) is a perfect square 
3.)	A perfect square - is a number that can be expressed as the product of two equal integers
4.)	This program checks if a number is a Fibonacci number 
*************************************************************************************************************/

function checkPerfectSquare(x){
let s=parseInt(Math.sqrt(x));
return s**2 == x;
}

function checkFibonacciNumber(n){
return checkPerfectSquare(5*n**2 + 4) || checkPerfectSquare(5*n**2 - 4);

}

for (let n = 0; n<=1000; n++){
    if(checkFibonacciNumber(n) == true){
    console.log(n + " is a Fibonacci number");
    }else {
    console.log(n + " is not a Fibonacci number");
    }
} 