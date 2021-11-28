function bmi(weight, height) {
    const bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    }
    return "Obese"
}

// другой вариант решения
const bmi = (w, h, bmi = w / h / h) => bmi <= 18.5 ? "Underweight" :
                                               bmi <= 25 ? "Normal" :
                                               bmi <= 30 ? "Overweight" : "Obese";