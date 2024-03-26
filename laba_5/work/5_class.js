var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TypeScript = /** @class */ (function () {
    function TypeScript(vers) {
        this.versia = vers;
    }
    TypeScript.prototype.info = function (name) {
        return "[".concat(name, "]: versia is ").concat(this.versia);
    };
    return TypeScript;
}());
var typesc = new TypeScript("5.02");
console.log(typesc.info("nikola"));
var Car1 = /** @class */ (function () {
    function Car1(theModel) {
        this.numberOfWeels = 4;
        this.model = theModel;
    }
    return Car1;
}());
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.nubmerOfWeele = 4;
    }
    return Car2;
}());
//Car1 == Car2
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'Black';
    }
    Animal.prototype.Go = function () {
        console.log('Gogogo');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var murzic = new Cat();
//murzic.voice;
murzic.setVoice('hhi');
var Companent = /** @class */ (function () {
    function Companent() {
    }
    return Companent;
}());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.rendom = function () {
    };
    App.prototype.info = function () {
        return '';
    };
    return App;
}(Companent));
