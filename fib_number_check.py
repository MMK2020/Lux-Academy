#Fibonacci numbers, form  Fibonacci sequence, in which each number is the sum of the two preceding ones
#A number is Fibonacci if and only if one or both of (5*n**2 + 4) or (5*n**2 – 4) is a perfect square 
#A perfect square - is a number that can be expressed as the product of two equal integers

#This program check if a number is a Fibonacci number

import math

def checkPerfectSquare(x):
    
    s = int(math.sqrt(x))
    
    return s*s == x #Returns True if x is a perfect square

def checkFibonacciNumber(n):
    
    return checkPerfectSquare(5*n*n + 4) or checkPerfectSquare(5*n*n - 4) # Returns True if number is Fibonacci else False

n = int(input('Enter number to check if it is a Fibonacci number: '))

if(checkFibonacciNumber(n) == True):
    print(n, 'is a Fibonacci number')
    
else:
    print(n, 'is not a Fibonacci number')
