//Two numbers and an operator are given. Based on the operator, perform the operation.
let a=10;
let b=5;
let op='*';
switch(op)
{
    case '+':
        console.log("Addition:",a+b);
        break;
    case '-':
        console.log("Subtarction:",a-b);
        break;
    case '*':
        console.log("Multiplication:",a*b);
        break;
    case '/':
        console.log("Division:",a/b);
        break;
    case '%':
        console.log("Remainder:",a%b);
        break;
    default:
        console.log("Invalid operator");  
}