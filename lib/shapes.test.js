const { Circle, Square, Triangle } = require('./shapes.js');

// A testing suite for shapes being created.
describe('shapes', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Circle', () => {
    it('should render the shape of a circle and the color chosen by the user.', () => {
      const testCircle = new Circle();
      testCircle.setColor('blue');
      expect(testCircle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    });
  });

  describe('Square', () => {
    it('should render the shape of a square and the color chosen by the user.', () => {
      const testCircle = new Square();
      testCircle.setColor('red');
      expect(testCircle.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="red" />`);
    });
  });

  describe('Triangle', () => {
    it('should render the shape of a triangle and the color chosen by the user.', () => {
      const testCircle = new Triangle();
      testCircle.setColor('purple');
      expect(testCircle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="purple" />`);
    });
  });
});

//fixed test