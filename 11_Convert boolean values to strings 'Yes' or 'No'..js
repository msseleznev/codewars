
function boolToWord( bool ){
    if (bool == true) {
        return "Yes"
    } else {
        return "No"
    }
    //...
}
// сокращенная запись
boolToWord = bool => bool == true ? "Yes" : "No";

