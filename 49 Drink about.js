function peopleWithAgeDrink(old) {
    if (old >= 21) {
        return 'drink whisky'
    } else if (old >= 18 ) {
        return 'drink beer'
    } else if (old >= 14) {
        return 'drink coke'
    }
    return 'drink toddy';
};


// другая форма записи
const peopleWithAgeDrink = (old) =>
    old < 14 ? "drink toddy" :
        old < 18 ? "drink coke" :
            old < 21 ? "drink beer" : "drink whisky"