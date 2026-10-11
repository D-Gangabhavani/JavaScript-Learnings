//program to find the even and odd numbers count in an array
function countEvenOdd()
{
    evencount=0;
    oddcount=0;
    for(let i =0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            evencount++;
        }
        else
        {
            oddcount++;
        }
    }
    console.log("Even count: " + evencount);
    console.log("Odd count: " + oddcount);
}

let arr=[1,2,3,9,6,30,20];
countEvenOdd();