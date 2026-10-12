//Find the Difference Between Two Arrays
function findDifference(arr1, arr2)
{
    let result=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(!arr2.includes(arr1[i]))
        {
            result.push(arr1[i]);
        }
    }
    return result;
}

let arr1=[1,2,3,9,6,30,10];
let arr2=[1,2,3,9,6,30,20];
console.log(findDifference(arr1,arr2));


