// Find the First Non-Repeating Element in an Array

function firstNonRepeating(arr) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        let count = 0;

        for (let j = 0; j < arr.length; j++) 
            {
            if (arr[i] === arr[j]) 
                {
                 count++;
                }
            }
            if (count === 1)
                {
                    return arr[i];
                }
    }
    return -1;
}

let arr = [4, 5, 1, 2, 1, 4, 5];

console.log(firstNonRepeating(arr));