const palindromes = function (string) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const lowerCase = string.toLowerCase();
    const cleanedArr = lowerCase
        .split('')
        .filter(char => validCharArray.includes(char))
    const copy = [...cleanedArr];
    const reversed = copy.reverse();
    return cleanedArr.join() === reversed.join();
};
// Do not edit below this line
module.exports = palindromes;

