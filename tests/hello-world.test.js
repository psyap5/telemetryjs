"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("../src/hello-world");
describe('calculate', function () {
    it('add', function () {
        var result = hello_world_1.sum(5, 2);
        expect(result).toBe(7);
    });
});
