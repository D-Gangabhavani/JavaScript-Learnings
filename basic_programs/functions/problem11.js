// sum of odd digits
function sumOddDigits(n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        if (digit % 2 !== 0) {
            sum = sum + digit;
        }

        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(sumOddDigits(12345)); // 9
console.log(sumOddDigits(2468));  // 0
console.log(sumOddDigits(13579)); // 25