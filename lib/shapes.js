
class Shapes {
    constructor(characters, color, shapeColor) {
        this.characters=characters;
        this.color = color;
        this.shapeColor = shapeColor
    }

setColor(color){
    this.shapColor = color;
}
}
class Circle extends Shapes {
    constructor(characters, textColor, shapeColor) {
    super(characters, color, shapeColor);
    }
}
class Triangle extends Shapes {
    constructor(characters, textColor, shapeColor) {
    super(characters, color, shapeColor);
    }
}
class Square extends Shapes {
    constructor(characters, textColor, shapeColor) {
    super(characters, color, shapeColor);
    }
}
module.exports = {Shapes, Circle, Square, Triangle};