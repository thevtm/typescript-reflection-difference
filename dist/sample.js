"use strict";
/*
 * Test issue for class-transformer/ts-jest
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var class_transformer_1 = require("class-transformer");
var Weapon = (function () {
    function Weapon(model, range) {
        this.model = model;
        this.range = range;
    }
    return Weapon;
}());
exports.Weapon = Weapon;
var User = (function () {
    function User() {
    }
    __decorate([
        class_transformer_1.Type(function () { return Weapon; }),
        __metadata("design:type", Map)
    ], User.prototype, "weapons", void 0);
    return User;
}());
exports.User = User;
exports.plainUser = {
    id: 1,
    name: "Max Pain",
    weapons: {
        firstWeapon: {
            model: "knife",
            range: 1,
        },
        secondWeapon: {
            model: "eagle",
            range: 200,
        },
        thirdWeapon: {
            model: "ak-47",
            range: 800,
        },
    },
};
var classedUser = class_transformer_1.plainToClass(User, exports.plainUser);
console.log("classedUser is instance of User?", classedUser instanceof User);
console.log("classedUser.weapons is instance of Map?", classedUser.weapons instanceof Map);
console.log("classedUser.weapons is instance of Weapon?", classedUser.weapons instanceof Weapon);
//# sourceMappingURL=sample.js.map