#! /usr/bin/env node
import inquirer from "inquirer";

const answer=await inquirer.prompt([
    {
        name:"num1",
        message:"Enter the first number",
        type:"number"
    },
    {
        name:"num2",
        type:"number",
        message:"Enter the second number"
    }
])

console.log("First",answer.num1);
console.log("Second",answer.num2);

if(answer.num1>answer.num2){
    console.log("First is greater");
}
else{
    console.log("Second is greater");
}
