#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 2992;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "enter your pin",
        type: "number" }
]);
if (pinAnswer.pin === pinCode) {
    console.log("login successful");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["check balance", "withdraw"]
        }]);
    if (operationAns.operation === "withdraw") {
        let actionAns = await inquirer.prompt([{
                name: "action",
                message: "select action",
                type: "list",
                choices: ["fast cash", "withdraw amount"]
            }]);
        if (actionAns.action === "withdraw amount") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    message: "enter amount",
                    type: "number"
                }]);
            if (amountAns.amount < myBalance)
                myBalance -= amountAns.amount;
            {
                console.log(`your remaining balance is ${myBalance}`);
            }
            if (amountAns.amount > myBalance) {
                console.log("insufficient balance");
            }
        }
        if (actionAns.action === "fast cash") {
            let cashAns = await inquirer.prompt([{
                    name: "cash",
                    message: "select amount",
                    type: "list",
                    choices: ["1000", "2000", "5000"]
                }]);
            if (cashAns.cash === "1000")
                myBalance -= 1000;
            {
                console.log(`your remaining balance is ${myBalance}`);
            }
            if (cashAns.cash === "2000")
                myBalance -= cashAns.cash;
            {
                console.log(`your remaining balance is ${myBalance}`);
            }
            if (cashAns.cash === "5000")
                myBalance -= 5000;
            {
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
        else if (operationAns.operation === "check balance") {
            console.log(`Your balance is ${myBalance}`);
        }
    }
}
else {
    console.log("incorrect pin");
}
