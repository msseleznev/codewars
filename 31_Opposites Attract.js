const loveFunc = (flower1, flower2) => (flower1 % 2 === flower2 % 2) ? false : true;


function likes(names) {
    if (names.length == 0) {
        return "no one likes this"
    } else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this"
    } else if (names.length ===3) {
        return names[0] + ", " + names[1] + " and " + names[2]  +" like this"
    } else if (names.length >= 4) {
        return names[0] + ", " + names[1] + " and " + Number(names.length - 2)  +" others like this"

    }
    return names[0] +  " likes this"
}
console.log(likes([2,2,1,6]))


function spinWords(str){
    const arraySrt = str.split([' ']).filter( str => str.length >= 5).join()
    return arraySrt.split('').reverse().join('')


}

console.log (spinWords ('dfsdgkjhgs fdgsdgadga dgadgdag fdfs fdsf '))