"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(3000);

// const num1Element = document.getElementById("num1") as HTMLInputElement;
// const num2Element = document.getElementById("num2") as HTMLInputElement;
// const buttonElement = document.querySelector("button")!;
// function add(num1:number | string , num2:number | string){
//     if(typeof num2 == "number" && typeof num1 == "number"){
//         numResult.push(num2 as number);
//         return num2 + num1;
//     }else{
//         textResult.push(num1 as string);
//         return +num1+ +num2;
//     }
// }
// const numResult : Array<number> = [];
// const textResult : string [] = [];
// type Result = {val : number; timestamp : Date};
// interface ResultObj {
//     val : number;
//     timestamp : Date;
// }
// function printResult ( resultObj : { val : number, timestamp : Date}){
//     console.log(resultObj.val);
// }
// buttonElement?.addEventListener("click", ()=>{
//     const num1 = num1Element.value;
//     const num2 = num2Element.value;
//     const result = add(+num1, +num2);
//     console.log(result);
//     printResult({ val : result as number, timestamp : new Date() });
// })
// const myPromise = new Promise<string>((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("It Worked");
//     },1000)
// })
// myPromise.then(result => {
//     console.log(result.split('w'));
// })
