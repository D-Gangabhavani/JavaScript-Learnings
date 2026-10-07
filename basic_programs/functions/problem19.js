//Remove Duplicates from an Array
function removeDuplicates(arr) 
{
    let unique = new Set();
    for (let num of arr) 
    {
        unique.add(num);
    }

    return [...unique];
}

let arr = [2,3,2,4,3,5,4];
console.log(removeDuplicates(arr));