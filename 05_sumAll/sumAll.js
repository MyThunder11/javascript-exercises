const sumAll = function(...args) {
    if (args[0] < 0 || args[1] < 0) {
        return 'ERROR'
    } 
    if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {
        return 'ERROR'
    }
    max = Math.max(args[0], args[1]);
    min = Math.min(args[0], args[1]);
    let sum = (max * (max + 1) / 2) - ((min - 1) * min / 2);
    return sum


};

// Do not edit below this line
module.exports = sumAll;
