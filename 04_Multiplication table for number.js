/*let s = "";
function multiTable(number) {
    for (var i = 1; i < number+1; i++) {
       i+" * "+number+" = "+i * number + "\n";
    }
}*/
//https://question-it.com/questions/406927/javascript-dlja-pechati-konsoli-tsikla-v-odnu-stroku

/*var s = "";
for(var i = 1; i < 11; i += 1) {
    s += i + "\n";
}
console.log(s);*/

function multiTable(number) {
    for (var i = 1; i < 11; i++) {
        return  i+" * "+number+" = "+i * number;
    }
}
console.log(multiTable(2));