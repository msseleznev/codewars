function findLongest(str) {
    let longestWord = str.split(" ")  //делим строку на массив слов
        .reduce(function (longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length
}