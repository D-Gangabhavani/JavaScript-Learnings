//Find the Second Smallest Element in an Array
function secondsmallestfunc()
{
    let smallest=Infinity;
    let secondsmallest=Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<smallest)
        {
            secondsmallest=smallest;
            smallest=arr[i];
        }
        else if(arr[i] > smallest && arr[i] < secondsmallest)
            { 
                secondsmallest = arr[i];
            }
    }
    return secondsmallest;
}

let arr=[1,2,3,9,6,30,20]
console.log(secondsmallestfunc());