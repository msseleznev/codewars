
function litres(time) {
    if (time < 1) {
        return 0;
    } else {
        let lit = Math.floor(time/1) * 0.5;
        return Math.floor(lit/1);
    }
}

// рефакторинг
function litres(time) {
    return Math.floor(time * 0.5);
}



