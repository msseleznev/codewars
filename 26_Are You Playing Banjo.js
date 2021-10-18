
function areYouPlayingBanjo(name) {
    if (name.charAt(0) == "r" || name.charAt(0) == "R") {
        return name + " plays banjo";
    }
    return  name + " does not play banjo";
}


// другие варианты
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
    } else {
        return name + ' does not play banjo';
    }
}
//
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}