// Math.floor() - делит без остатка
function century(year) {
    if (year < 100) {
        return 1;
    } else {
        let cent = Math.floor((year-1)/100) + 1;
        return cent;
    }
}


