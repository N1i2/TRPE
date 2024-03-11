function add(a: number, b: number): number {
    return a + b;
}

function UpperDo(a: string): string {
    return a.toUpperCase();
}

console.log(UpperDo('Hello World'));

interface IMyPosition {
    x: number | undefined,
    y: number | undefined
}

interface IMyPositionWithDefolt extends IMyPosition {
    defoult: string
}

function position(): IMyPosition
function position(a: number): IMyPositionWithDefolt
function position(a: number, b: number): IMyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}

console.log('empt:\t', position());
console.log('one:\t', position(4));
console.log('all:\t', position(7, 12));