//Find the Missing Number
function findMissingNumber(arr) {
    let n = arr.length + 1;

    let expectedSum = n * (n + 1) / 2;  //This is the sum if no number was missing: 21 for 6 numbers

    let actualSum = 0;   //variable to store the sum of the numbers that are actually present.

    for (let num of arr) {
        actualSum = actualSum + num;
    }

    return expectedSum - actualSum;
}

let arr = [1, 2, 3, 5, 6];

console.log(findMissingNumber(arr));