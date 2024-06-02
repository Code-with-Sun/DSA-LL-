// Home Work questions for class 05 conditional statements

/*1. **Basic Loops**:

   - **Question**: Write a `for` loop that prints the numbers from 10 to 1 in descending order.
   - **Hint**: Use a loop counter that starts at 10 and decrements by 1 until it reaches 1.
*/

// Ans

// for(let counter = 10;counter>=1;counter--){
//     console.log(counter);
// }


/*
2. **While Loop**:

   - **Question**: Write a `while` loop that prints the first 5 even numbers starting from 0.
   - **Hint**: Use a loop counter initialized to 0 and increment it by 2 in each iteration.
*/

// Ans

// var ev = 0;
// var count = 0;
// while(count < 5){
//     console.log(ev);
//     ev += 2;
//     count++;
// }

// without extra variables

// var ev = 0;
// while(ev <= 2*5-1){
//     console.log(ev);
//     ev += 2;
// }

/*
3. **Do-While Loop**:

   - **Question**: Write a `do-while` loop that prints the numbers from 1 to 5.
   - **Hint**: Ensure the condition is checked after the loop body has executed.
*/

// Ans

// var num=1;
// do{
//     console.log(num);
//     num ++;
// }while(num<=5);


/*
4. **Break Statement**:

   - **Question**: Write a `for` loop that prints numbers from 0 to 10, but stops the loop when the number 7 is reached.
   - **Hint**: Use an `if` statement to check if the loop counter equals 7 and then use `break`.
*/


//Ans

// for(let i = 0;i<=10;i++){
//     if(i == 7) break;
//     console.log(i);
// }


/*
5. **Continue Statement**:

   - **Question**: Write a `for` loop that prints numbers from 0 to 10, but skips the number 5.
   - **Hint**: Use an `if` statement to check if the loop counter equals 5 and then use `continue`.
*/


//Ans

// for(let i = 0;i<=10;i++){
//         if(i == 5) continue;
//         console.log(i);
// }


/*
6. **If-Else Statement**:

   - **Question**: Write an `if-else` statement that checks if a given number `x` is positive, negative, or zero, and prints an appropriate message.
   - **Hint**: Use nested `if` statements to handle all three conditions.
*/


//Ans

// var num = 26;
// if(num>0){
//     console.log(num + " is a positive number.");
// }
// else if(num == 0){
//     console.log(num + " is Zero.");
// }
// else{
//     console.log(num + " is a negative number.");
// }


/*
7. **Switch Statement**:

   - **Question**: Write a `switch` statement that takes a variable `day` (with values from 0 to 6) and prints the corresponding day of the week (e.g., 0 for Sunday, 1 for Monday, etc.).
   - **Hint**: Each `case` should correspond to a day of the week.
*/


//Ans

// var day = 6;
// switch(day){
//     case 0 : console.log("Sunday");
//     break;
//     case 1 : console.log("Monday");
//     break;
//     case 2 : console.log("Tuesday");
//     break;
//     case 3 : console.log("Wednesday");
//     break;
//     case 4 : console.log("Thrusday");
//     break;
//     case 5 : console.log("Friday");
//     break;
//     case 6 : console.log("Saturday");
//     break;
// }


/*
8. **Ternary Operator**:

   - **Question**: Use the ternary operator to check if a given number `y` is even or odd and print "Even" or "Odd" accordingly.
   - **Hint**: Use the modulus operator `%` to determine if the number is even or odd.
*/


//Ans

// var y = 8;
// var ternary = y % 2 == 0 ? "Even" : "Odd";
// console.log(ternary);


/*
9. **Combining Loops and Conditions**:

   - **Question**: Write a `for` loop that prints numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".
   - **Hint**: Use `if`, `else if`, and `else` statements to check the conditions inside the loop.
*/


//Ans

// for(let i = 1;i<=20;i++){
//     if((i % 3 == 0) && (i % 5 == 0)){
//         console.log("FizzBuzz");
//     }
//     else if(i % 5 == 0){
//         console.log("Buzz");
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(i);
//     }
// }


/*
10. **Complex Condition**:
    - **Question**: Write an `if-else` statement that takes a variable `temperature` and prints "Cold" if the temperature is below 15, "Warm" if it’s between 15 and 25, and "Hot" if it’s above 25.
    - **Hint**: Use compound conditions with logical operators `&&` to check for the range between 15 and 25.
*/


//Ans

var temperature = 20;
if(temperature < 15){
    console.log("Cold");
}
else if(temperature >= 15 && temperature <= 25){
    console.log("Warm");
}
else{
    console.log("Hot");
}