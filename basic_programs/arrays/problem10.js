//Find the Longest Subarray with a Given Sum
function longestSubarraySum(arr, target) 
{
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) 
    {
        let sum = 0;

        for (let j = i; j < arr.length; j++) 
        {
            sum = sum + arr[j];

            if (sum === target) {
                let length = j - i + 1;

                if (length > maxLength) {
                    maxLength = length;
                }
            }
        }
    }

    return maxLength;
}

let arr = [1, 2, 1, 1, 1, 3, 2];
let target = 4;

console.log(longestSubarraySum(arr, target));