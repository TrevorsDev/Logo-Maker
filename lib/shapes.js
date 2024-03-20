// When an instance of shape is intantiated (created) it is given a color property that is blank, aka awaiting for user answer.
class Shape {
    constructor() {
        this.color = '';
    }
    // Our way of setting color for later
    setColor(color) { 
        this.color = color;
    }
}
// extends is an inheritance keyword. Circle is also a shape. So by using extends on Circle we are applying the characteristics of Shape
class Circle extends Shape {
    render() { return `<circle cx="150" cy="100" r="80" fill="${this.color}" />` };
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };