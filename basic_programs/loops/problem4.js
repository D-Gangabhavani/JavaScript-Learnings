//Write a program to count how many even numbers are present from 1 to 20 using a for loop.Print the total count.
let count=0;
for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
        count++;
    }
}
console.log("Count of even numbers is",count);