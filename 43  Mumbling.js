function accum(str) {
    return str
        .split("")
        .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
        .join("-");

}