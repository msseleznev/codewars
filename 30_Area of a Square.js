
function squareArea(a) {
    let radius = a / (2 * Math.PI / 4);
    let area =  radius * radius;
    return Math.round(area*100) / 100;  // округляем до 2х знаков после запятой
}