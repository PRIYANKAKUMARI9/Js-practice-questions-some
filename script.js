//<h1>1.Write a function that takes two numbers as
 //arguments and returns their sum.</h1>

let twonum=(x,y)=>{
  sum=x+y;
  return sum;
}
console.log(twonum(2,2));

/*Write a function that takes a string as an argument
 and returns its length.*/

 let takeslength=(num)=>{
    add=num.length;
    return add;
 }

 console.log(takeslength("this is world"))

 /*Write a program that takes two numbers and displays 
 their sum, difference, product, and quotient.
 */

 var a=4;
 var b=4;

 sum=a+b;
 difference=a-b;
 product=a*b;
 quotient=a/b;

 console.log(`this is sum ${sum}`)
 console.log(`this is difference ${difference}`)
 console.log(`this is product ${product}`)
 console.log(`this is quotient ${quotient}`)


 /*Write a function that takes two numbers as arguments and 
 returns the larger number.*/

 const takestwo=(one,two)=>{
    if(one<two){
        console.log(`this first in if A = ${one}`)
    }
    else{
        console.log(`this is second else B = ${two}`)
    }
 }

 console.log(takestwo(4,6))

 /*Write a program that displays a string in reverse order.

//the split() method is used to convert the string into an array of characters. 
//The reverse() method is then called on the array to reverse the order of the elements.
// Finally, the join() method is used to join the array back into a string.
*/

var nam="anurag kumar";

const rvrs=(strs)=>{
    let rvrsjoin=strs.split("").reverse("").join("");
    return rvrsjoin;
}

console.log(rvrs(nam));

/*Write a program that takes a number and checks whether it is positive, negative, or zero.
Inside the function, we use an if-else statement to check whether the number is positive,
negative, or zero.
 */

const takenum=(checkallnumber)=>{
    if(checkallnumber>0){
        console.log(`This is positive number =${checkallnumber}`)
    }
    else if(checkallnumber<0){
        console.log(`This is negative number = ${checkallnumber} `)
    }
    
    else{
        console.log(`this is only zero =${checkallnumber}`)
    }
}

console.log(takenum(888));

/*Write a program that takes a number and prints the 
multiplication table for that number.*/








