// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when given "Jane" parameter', function(){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return "Hello,Alex!" when given "Alex" parameter', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when given "Pat" parameter', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})
describe('isFive', function() {
    it('should be a function named "isFive"', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called.', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return false if passed the number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if passed "5"', function () {
        expect(isFive('5')).toBe(true);
    })
})
describe('isEven', function() {
    it('should be a function named "isEven"', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('returns true when executed with isEven(2)', function() {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function() {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when executed with isEven("banana")', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('returns true when executed with isEven("8")', function() {
        expect(isEven("8")).toBe(true);
    });
    it('returns false when executed with isEven(Infinity)', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('returns false when executed with a boolean input', function() {
        expect(isEven(true)).toBe(false) && expect(isEven(false)).toBe(false);
    });
    it('returns false when executed without an argument like isEven()', function() {
        expect(isEven()).toBe(false);
    });
})