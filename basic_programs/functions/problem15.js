//Find the Element with Maximum Frequency

function findMostFrequent(arr) {
    let frequency = new Map();

    // Count frequency
    for (let num of arr) {
        if (frequency.has(num)) {
            frequency.set(num, frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
    }

    // Find maximum frequency
    let maxCount = 0;
    let answer = arr[0];

    for (let [num, count] of frequency) {
        if (count > maxCount) {
            maxCount = count;
            answer = num;
        }
    }

    return answer;
}

let arr = [2, 3, 2, 4, 3, 2, 5];

console.log(findMostFrequent(arr));