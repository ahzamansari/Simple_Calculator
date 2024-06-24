#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a welcome message
console.log("\n\tWelcome\'Ahzam\' - CLI simple Calculator\n");
//Asking Questions From User through inquirer
//in this only we are asking questions
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "Secondnumber" },
    {
        message: "Select one Operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    }
]);
//If else atatements
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.Secondnumber);
}
else {
    console.log("Invalid Input");
}
