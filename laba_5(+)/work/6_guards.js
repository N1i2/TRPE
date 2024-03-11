function strip(x) {
    if (typeof (x) === "number") {
        return x.toFixed(3);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response head';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error head';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    return {
        info: res.header + res.message
    };
}
function setAllerType(type) {
    //\\\\
}
setAllerType("success");
//setAllerType(`error`);
