
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    };
};

// Другой вариант
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}
//сокращенная запись
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
