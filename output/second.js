"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var name1 = new Person('david');
console.log(name1.name);
var Samname1 = name1.getName();
