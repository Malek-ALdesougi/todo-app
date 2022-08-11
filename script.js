


// Ask the user to enter his/her name as input.

let Name =prompt("Name" , "Enter your name here")





// Ask the user to enter his/her gender as input. The answer should be either (male or female).

let gender = prompt("Gender");

if ((gender !== "male") && (gender !== "female") ){

    alert("please choose between male or female");

    prompt("Gender");
}




// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero

let age = prompt("Age", "please enter your age!")

if (age <=0) {
    confirm("please re-enter your age with only positive valu !!")

    prompt("enter your age !", "positive vaue of age ")
}






// Ask the user to confirm if he wants to skip the welcoming message.

let welcomMessage = confirm("do you want see the welcoming message ? if no please press cancle")

if ((confirm = true) && (gender === "male")) 
    alert("Welcome To Our Page Mr" +" " + Name );


else if ((confirm = true) && (gender === "female"))  
    alert("Welcome To Our Page Ms"+" " + Name );


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

    case "yes" : alert("Well done keep the greate work on :)")

    break;

    case "y" : alert("Well done keep the greate work on :)")

    break;

    case "no" : alert("Then you should")

    break;

    case "n" : alert("Then you should")

    break;


    default : 

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




























