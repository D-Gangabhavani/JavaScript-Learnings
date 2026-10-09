//Finding the sum of elements in an array
function sumf()
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum;
}

 let arr=[1,2,3,4,5];
 console.log(sumf());