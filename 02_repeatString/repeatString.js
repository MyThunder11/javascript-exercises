const repeatString = function(string, num) {
        if (num === 0) {
            const empty = ""
            return empty;
        } else if (num < 0) {
            const error = 'ERROR';
            return error;
        }
        let str = string.repeat(num);
        return str
    }

// Do not edit below this line
module.exports = repeatString;
