//Find the Smallest Digit
function findSmallestDigit(n) {
    let smallest = 9; //9 is the largest possible single digit. So the first digit we check will always be smaller than or equal to it.

    while (n > 0)
    {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = Math.floor(n / 10);
    }

    return smallest;
}

console.log(findSmallestDigit(58329)); 
console.log(findSmallestDigit(4172));  
console.log(findSmallestDigit(9085));  