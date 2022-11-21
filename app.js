alert("Space is cool!!!");

function enterName() {
let usersName = prompt("What is your name?");
document.write("Hello" + usersName);
return usersName;
}

// let respone = prompt ("Do you like space?")
// if respo


// function functionName(parameters){code to execute}
// function functionName(){
// code to exectue:
// }

function addTwoNumbers(number1, number2){
let sum = number1 + number2;
return sum;
}


addTwoNumbers(4, 5);

console.log(addTwoNumbers(4, 5));

function sayHi(){
    let usersName = prompt ("What is your name?");
    console.log("The user's name is: " + usersName);
    document.write("Hello and welcome to my page, " + usersName);
    
    if (usersName == ""){
        alert("You didn't type a name...");
        usersName = prompt("Please tell me your name.");

    }
    console.log("The user's name is: " + usersName);
    return usersName;

}
sayHi();
function rateMyPage(){
    let rating = prompt("How many stars would you rate my page");
    for (let i = 0; i <rating; i++){
        console.log(i);
        document.write ('<img src="https://thumbs.dreamstime.com/b/golden-star-christmas-decoration-clipping-path-isolated-white-background-163815373.jpg" /> ') 
    }
}
rateMyPage();