function add(a, b) {

    var c = addWithoutCarrying(a, b);
    var d = additionCarrying(a, b);

    if (d !== 0) {
        return add(c, d);
    }
    return c;
}

function addWithoutCarrying(a, b) {
    return a ^ b;
}

function additionCarrying(a, b) {
    return (a & b) << 1;
}

console.log(add(3,4));