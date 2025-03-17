function getWordParameters(word) {
    wordParams = {
        word: word,
        size: word.length
    }
    return wordParams;
}

function getLongestWord(wordArray) {
    let longestWord = null;
    wordArray.forEach(function(word) {
        if (longestWord === null) longestWord = getWordParameters(word);
        else {
            comparedWord = getWordParameters(word);
            if (longestWord.size < comparedWord.size) {
                longestWord = comparedWord;
            }
        }
    });
    return longestWord;
}

function longestWord(wordArray) {
    let longestWord = null;
    wordArray.forEach(function(word) {
        if (longestWord === null) longestWord = word;
        else {
            if (longestWord.length < word.length) {
                longestWord = word;
            }
        }
    });
    return longestWord;
}


var rijeci = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'fantasticus'];

var najduzaRijec = getLongestWord(rijeci);
console.log(`Najduza rijec: ${najduzaRijec.word} s duljinom ${najduzaRijec.size}`);

var longest = longestWord(rijeci);
console.log(`Najduza rijec: ${longest}`);