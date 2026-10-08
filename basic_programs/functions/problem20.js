//Find the Longest Consecutive Sequence
function longestConsecutive(arr) {
    let numbers = new Set(arr);

    let maxLength = 0;

    for (let num of numbers) {

        // Check if this is the beginning of a sequence
        if (!numbers.has(num - 1)) {

            let current = num;
            let length = 1;

            while (numbers.has(current + 1)) {
                current++;
                length++;
            }

            if (length > maxLength) {
                maxLength = length;
            }
        }
    }

    return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(arr));