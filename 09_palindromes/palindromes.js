const palindromes = function (string) {
    const str = string
                .toLowerCase()
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .replace(/\s{2,}/g," ")
                .replace(/\s+/g, '');
    return (
        str
        .split('')
        .reverse()
        .join('') == str
        
    );

};

// Do not edit below this line
module.exports = palindromes;
