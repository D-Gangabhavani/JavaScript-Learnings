//Move All Zeros to the End
function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}

let arr = [0, 1, 0, 3, 12];

console.log(moveZeros(arr));