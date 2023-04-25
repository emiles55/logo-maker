



class Circle{
    constructor(characters, color, shapeColor) {
        this.characters=characters;
        this.color = color;
        this.shapeColor = shapeColor
}
    render() {
        return `<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${this.shapeColor}"/> `
     }
     setColor(color){
        this.shapColor = color;
    }
}
class Triangle{
    constructor(characters, color, shapeColor) {
        this.characters=characters;
        this.color = color;
        this.shapeColor = shapeColor
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}" />`
    }
    setColor(color){
        this.shapColor = color;
    }
}
class Square {
    constructor(characters, color, shapeColor) {
        this.characters=characters;
        this.color = color;
        this.shapeColor = shapeColor
    }
    render() {
        return `<rect width="200" height="200" fill="${this.shapecolor}" />`   
    }
    setColor(color){
        this.shapColor = color;
    }
}
module.exports = {Circle, Square, Triangle};