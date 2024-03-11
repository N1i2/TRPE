function add(a, b) {
    return a + b;
}
function UpperDo(a) {
    return a.toUpperCase();
}
console.log(UpperDo('Hello World'));
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('empt:\t', position());
console.log('one:\t', position(4));
console.log('all:\t', position(7, 12));
