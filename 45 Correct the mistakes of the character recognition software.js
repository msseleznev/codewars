//Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном,
// заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением,
// а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
//g - флаг глобальное сопоставление
// i - флаг игнорировать регистр
// m - флаг сопоставление по нескольким строкам
// y - флаг «липкий» поиск, сопоставление начинается с текущей позиции в строке
// первый вариант написания
function correct(str) {
    return str.replace(/[5]/g, "S").replace(/[1]/g, "I").replace(/[0]/g, "O"); // создаем цепочку сопоставлений
}

// второй вариант написания

function correct(str) {
    let chars = {5: "S", 0: "O", 1: "I"};  //создаем объект сопоставлений
    return str.replace(/[501]/g, m => chars[m]);
}
