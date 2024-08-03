const palindromes = function (string) {
    
    const legit = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => legit.includes(character))
    .join('');
    
    const reversedString = cleanedString
    .split('')
    .reverse()
    .join('');
    return cleanedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
