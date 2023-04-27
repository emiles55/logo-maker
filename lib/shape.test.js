const { Triangle, Square, Circle } = require("./shapes.js");
describe("blue triangle test", () => {
    test("test for a blue triangle", () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
});
describe("green square test", () => {
    test("test for purple square", () => {
const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="green"/>`);
});
});
describe("red circle test", () => {
    test("test for red circle", () => {
const shape = new Circle();
shape.setColor("purple");
expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="red"/>`);
});
});