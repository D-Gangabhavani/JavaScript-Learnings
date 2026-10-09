//finding largest element in the array
function largestelement()
{
    let largest=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i];
        }
    }
    return largest;
}

let arr=[1,2,10,15,3,33];
console.log(largestelement());
