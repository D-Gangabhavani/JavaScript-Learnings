//Finding the first repeating element in an array

function findFirstRepeating(arr) {
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i];
        }

        seen.add(arr[i]);
    }

    return -1;
}

let arr = [10, 5, 3, 4, 3, 5, 6];

console.log(findFirstRepeating(arr));