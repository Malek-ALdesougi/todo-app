


// Ask the user to enter his/her name as input.

let Name = prompt("Name", "Enter your name here")





// Ask the user to enter his/her gender as input. The answer should be either (male or female).

let gender = prompt("Gender");

if ((gender !== "male") && (gender !== "female")) {

    alert("please choose between male or female");

    prompt("Gender");
}




// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero

let age = prompt("Age", "please enter your age!")

if (age <= 0) {
    confirm("please re-enter your age with only positive valu !!")

    prompt("enter your age !", "positive vaue of age ")
}






// Ask the user to confirm if he wants to skip the welcoming message.

let welcomMessage = confirm("do you want see the welcoming message ? if no please press cancle")

if ((welcomMessage = true) && (gender === "male"))
    alert("Welcome To Our Page Mr" + " " + Name);


else if ((welcomMessage = true) && (gender === "female"))
    alert("Welcome To Our Page Ms" + " " + Name);

else

    alert("Continue to the next question");




// ---------------------------------------------------------------- if question 1


// As a user, I would like to answer more questions.So you should add new three (Yes/No / y / n) questions.
// If the input was empty consider the answer is "invalid" string.

let firstYesNo = prompt("This is my first time see this website");

let yesNoInput1 = firstYesNo.toLowerCase();

if ((yesNoInput1 === "yes") || (yesNoInput1 === "y"))
    alert("Hope to always visit us");


else if ((yesNoInput1 === "no") || (yesNoInput1 === "n"))
    alert(" Welcome back");


else
    yesNoInput1 = "invalid";


// ------------------------------------------------------------------Making the array of answers 


const answers = new Array(yesNoInput1);



// -----------------------------------------------------------------switch question 2 

let secondYesNo = prompt("Do you have any suggestions ?");

let yesNoInput2 = secondYesNo.toLowerCase();

switch (yesNoInput2) {

    case "yes": prompt("write your suggestions here please");

        break;

    case "y": prompt("write your suggestions here please ");

        break;

    case "no": alert("Ok then you can return to put any seggestion later");

        break;

    case "n": alert("Ok then you can return to put any seggestion later");

        break;

    default:

        yesNoInput2 = "invalid";
}

answers.push(yesNoInput2);

// ----------------------------------------------------------- switch qustion 3


let thirdYesNo = prompt("Do you like to read ?");

let yesNoInput3 = thirdYesNo.toLowerCase();

switch (yesNoInput3) {

    case "yes": alert("Well done keep the greate work on :)")

        break;

    case "y": alert("Well done keep the greate work on :)")

        break;

    case "no": alert("Then you should")

        break;

    case "n": alert("Then you should")

        break;


    default:

        yesNoInput3 = "invalid"
}

answers.push(yesNoInput3);


console.log(answers)



// --------------------------------------------------- raring question


let rating = prompt("How many start do you rate our webstie ?? from 1 - 5");

let numberRate = parseInt(rating);

if (numberRate < 0) {

    numberRate = 0;
}

else if (numberRate > 5) {
    numberRate = 5;
}

else {
    rating = "invalid"
}

console.log(" Your number of rate is" + " ", numberRate);




// Q1: Evaluate each of the following Javascript expressions and show the value--------------------Q1

let multiplication = 9 * 3;

let valueOfExeprission = "value" + 50;

let modules = 17 % 5;

let modules2 = 5 % 17;

let division = 5 / 10;

let isEqual = (4 == 4);

let isEqual2 = (4 != 5);

let lessThanOrEqual = (7 <= 8);

let ceiling = console.log(Math.ceil(2.3));

let floor = console.log(Math.floor(2.3));


let Q1 = new Array(multiplication, valueOfExeprission, modules, modules2,  division,
     isEqual, isEqual2, lessThanOrEqual, ceiling, floor );






// Q2 : Read a number (using prompt) and display it using alert-------------------------Q2

let inputString = prompt("Write a number");

let inputNumber = Number(inputString);

alert("Your number is : " + " " + inputNumber);





// Q3 : Read in two numbers and display them in ascending order.----------------------------- Q3

let twoInput = prompt("Enter The first number :");

let firstNumber = Number(twoInput);


let twoInput2 = prompt("Enter the second number :")

let secondNumber = Number(twoInput2);

const ascending = new Array (firstNumber , secondNumber);



ascending.sort(function(a,b) {return b-a});

console.log(ascending);




//  Q4: Read in two numbers and display the larger ---------------------------------- Q4 


let textLarge = prompt("Enter the first number to compare :");

let textLargeNumber = Number(textLarge);

let textLarge2 = prompt("Enter the second number to compare");

let textLargeNumber2 = Number(textLarge2);

if (textLargeNumber > textLargeNumber2)
    alert("The number :", textLargeNumber , "is the grater");

else if (textLargeNumber < textLargeNumber2) 

alert("The number :", textLargeNumber2, " is the grater");

else 
alert("The tow number are equale !!");



// Q5: Read two numbers and display their sum.  What problem did you encounter?-------------Q5


let numberSum1 = prompt("Enter a number for sum");

let numberSumEdit1 = Number(numberSum1);


let numberSum2 = prompt("Enter a number for sum");

let numberSumEdit2 = Number(numberSum2);


let sumOf = numberSumEdit1 + numberSumEdit2 ;

alert(sumOf , "Is the sum");


// Q7: If you have a “num” variable,  Your task is to print:----------------------------Q6


let variableTest = Number(prompt("Enter a number less that 10 !!"))


switch(variableTest) {

    case 1 : 
    alert("One");
    break;

    case 2 : 
    alert("Two");
    break;

    case 3 : 
    alert("Three");
    break;

    case 4 : 
    alert("Four");
    break;

    case 5 : 
    alert("Five");
    break;

    case 6 : 
    alert("Six");
    break;


    case 7 : 
    alert("Se7en");
    break;

    case 8 : 
    alert("eight");
    break;

    case 9 : 
    alert("иine");
    break;

    default :

    alert("Please try again !!");

    Number(prompt("Enter a number less that 10 !!"));

}


// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.---------------Q7

for (let i = 0; i <= 5; i++) {
alert(i)
}




// Q8: Use a loop to display the numbers 0 through 5 in a single alert window-------------------Q8

let numbers = new Array();

for (let x = 1; x < 6; x++) {

    numbers.push(x);
}

// console.log(numbers); ------- To Be sure from the solution

let texNumbers = numbers.toString();

alert(texNumbers);



// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3 ------------------------Q9

let cArray = new Array();

for (let c = 1; c < 21; c++) {
    if (c % 3 == 0){

        cArray.push(c);
    }
    else
        console.log("not of three multiples");   
}

alert(cArray);


// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range,---------------Q10
//  display an error message and prompt again 
// until a valid number is entered.  Assume the user enters a number each time


while (true){

    rangeNumber = Number(prompt("Enter a number between 0 and 100 !!"));

    if ((rangeNumber > 0) && (rangeNumber < 100)) {

        break;
    }

}


// Q11: Repeat previous exercise, but this time allow for the possibility that -----------------------------Q11
// the user enters something that is not a number.  Hint: the built in function
//  isNaN(x) returns true if x is not a number.  It returns false if x is a number.
//    Sort of backwards, but that's what's available.


while (true){

    rangeNumber2 = Number(prompt("Enter a number between 0 and 100 !!"));

    if ((rangeNumber2 > 0) && (rangeNumber2 < 100)) {

        break;
    }

    if (isNaN(rangeNumber2) == true) {
        break;
    }

}


// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered-------------------Q12
// .  For example, if you enter 10, then display 55 which is the sum of
//    0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10


let intNumber = Number(prompt("Enter an integer number to get the sum of all numbers"));

let sum = 0 ;

for (let t = 0; t <= intNumber; t++)

sum = sum + t; 

alert(sum);




// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered ------------ Q13
// .  For example, if you enter 10, then display 5 which is the average of
//    (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.


let intNumber2 = Number(prompt("Enter an integer number to get the average"));

let sum2 = 0;
let avr = 0;

for (let v = 0; v <= intNumber2; v++)

    sum2 = sum2 + v;

    avr = (sum2/intNumber2);

    alert("The average is" + " " + avr);














































