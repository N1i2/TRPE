var rec1 = {
    id: '1423',
    size: {
        width: 20,
        height: 30
    },
    color: "green",
};
var rec2 = {
    id: '1483',
    size: {
        width: 50,
        height: 80
    },
};
rec2.color = "black";
//rec2.id = 55;
var rec3 = {};
var tec4 = {};
var rect5 = {
    id: '22',
    size: {
        width: 5,
        height: 32
    },
    color: 'white',
    getAria: function () {
        return this.size.white * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTinme = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    margin: '50px, 150px',
    //    age:56
};
