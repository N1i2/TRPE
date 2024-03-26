interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rec1: Rect = {
    id: '1423',
    size: {
        width: 20,
        height: 30
    },
    color: "green",
}

const rec2: Rect = {
    id: '1483',
    size: {
        width: 50,
        height: 80
    },
}

rec2.color = "black";
//rec2.id = 55;

const rec3 = {} as Rect;
const tec4 = <Rect>{}

//===================================наследование

interface RectWithArea extends Rect {
    getAria: () => number
}

const rect5: RectWithArea = {
    id: '22',
    size: {
        width: 5,
        height: 32
    },
    color: 'white',
    getAria(): number {
        return this.size.white * this.size.height;
    }
}

//=================================
interface IClock {
    time: Date
    setTinme(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();
    setTinme(date: Date): void {
        this.time = date;
    }
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    margin: '50px, 150px',
    //    age:56
}