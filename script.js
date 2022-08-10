


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
    alert("welcome mr \n " + Name );


else if ((confirm = true) && (gender === "female"))  
    alert("welcome ms \n " + Name );


