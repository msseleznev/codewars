function arrayPlusArray(arr1, arr2) {
    let arr1Sum = arr1.reduce((a, c) => a + c, 0); //сумма первого массива
    let arr2Sum = arr2.reduce((a, c) => a + c, 0); //сумма вториго массива
    return arr1Sum + arr2Sum;
}
