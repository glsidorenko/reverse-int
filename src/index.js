module.exports = function reverse (n) {
    const reverse = Math.abs(n).toString().split('').reverse().join('');
    return Number(reverse);
}

