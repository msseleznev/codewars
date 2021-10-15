const areaOrPerimeter = function(l , w) {
    if (l === w) {
        return l * w;
    } else {
        return l + l + w + w;
    }
};

// сокращенная форма

const areaOrPerimeter = (l , w) => l==w ? l*w : 2*(l+w);