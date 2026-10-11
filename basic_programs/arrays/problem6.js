//Find the Common Elements in Two Arrays
function findCommon(arr1, arr2)
{
    let common=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(arr2.includes(arr1[i]))
        {
            common.push(arr1[i]);
        }
    }
    return common;
}

let arr1=[1,2,3,9,6,30,20];
let arr2=[1,2,3,9,6,30,10];
console.log(findCommon(arr1,arr2));