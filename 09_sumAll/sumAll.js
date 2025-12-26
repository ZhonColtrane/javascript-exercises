function sumAll(int1, int2) {
    if (int1 < 0 || int2 < 0 || 
        !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    }
    let arr = [int1, int2];
    arr.sort((int1, int2) => int1 - int2);
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
