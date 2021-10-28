function squareArea(a) {
    let radius = a / (2 * Math.PI / 4);
    let area = radius * radius;
    return Math.round(area * 100) / 100;  // округляем до 2х знаков после запятой
}



function calculateAge(bornAge, thisYear) {

    let age = thisYear - bornAge;
    const yearT = age => (Math.abs(age) == 1) ? "year" : "years";

    if (age == 0) {
        return "You were born this very year!";
    } else if (age < 0) {
        return "You will be born in " + Math.abs(age) + " "+ yearT +".";
    } else if (age > 0) {

        return "You are " + age + " " +  yearT + " old.";
    }
}

