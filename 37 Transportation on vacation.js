function rentalCarCost(d) {
    const rentalCar = 40;
    let sizeDiscount = d  >= 7 ? 50 : d >= 3 ? 20 : 0
    return d * rentalCar - sizeDiscount;
}