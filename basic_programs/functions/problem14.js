//Counting the frequency of elements in an array
function countFrequency(arr) {
    let frequency = new Map();

    for (let num of arr) {
        if (frequency.has(num)) {
            frequency.set(num,frequency.get(num) + 1);
        } else {
            frequency.set(num, 1);
        }
    }

    for (let [num, count] of frequency) {
        console.log(num + " => " + count);
    }
}

let arr = [2, 3, 2, 4, 3, 2, 5];

countFrequency(arr);