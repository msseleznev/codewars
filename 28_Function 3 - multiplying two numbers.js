function getAverage(marks){
    let marksSum = marks.reduce((a, c) => a + c, 0);
    return marksSum % marks.length;
}