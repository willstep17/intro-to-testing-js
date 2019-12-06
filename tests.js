describe('name for test', function() {
    it('this is the label for this test', function() {
        expect(test).toBeDefined(false);
    });
    it('to be', function() {
        expect(test).toBe(true);
    });
    it('not to be', function() {
        expect(test).not.toBe(false);
    });
});

//Unit tests for the sayHello function
describe('sayHello', function() {
    it("Should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("Should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("Should return 'Hello World' when not passed any arguments", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed null", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed an empty string", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed 2.3", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed '5'", function() {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed true boolean", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("Should return 'Hello World' when passed false boolean", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("Should return 'Hello, Jane!' when passed 'Jane'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("Should return 'Hello, Alex!' when passed 'Alex'", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Should return 'Hello, Pat!' when passed 'Pat'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

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

//Unit tests for the isFive function
describe('isFive', function() {
    it('Should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('Should return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('Should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('Should return true when passed string "5"', function() {
        expect(isFive("5")).toBe(true);
    });
});

//Unit tests for the isEven function
describe('isEven', function() {
    it('Should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('Should return a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('Should return true when passed 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('Should return true when passed -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('Should return true when passed 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('Should return true when passed 3', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('Should return true when passed string "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('Should return true when passed Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('Should return false when passed boolean false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('Should return false when passed boolean true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('Should return false when passed undefined', function() {
        expect(isEven()).toBe(false);
    });
});

//Unit tests for the isVowel function
describe('isVowel', function() {
    it('Should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('Should return a boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    // it('Should return true when passed 2', function() {
    //     expect(isEven(2)).toBe(true);
    // });
    // it('Should return true when passed -4', function() {
    //     expect(isEven(-4)).toBe(true);
    // });
    // it('Should return true when passed 3', function() {
    //     expect(isEven(3)).toBe(false);
    // });
    // it('Should return true when passed 3', function() {
    //     expect(isEven("banana")).toBe(false);
    // });
    // it('Should return true when passed string "8"', function() {
    //     expect(isEven("8")).toBe(true);
    // });
    // it('Should return true when passed Infinity', function() {
    //     expect(isEven(Infinity)).toBe(false);
    // });
    // it('Should return false when passed boolean false', function() {
    //     expect(isEven(false)).toBe(false);
    // });
    // it('Should return false when passed boolean true', function() {
    //     expect(isEven(true)).toBe(false);
    // });
    // it('Should return false when passed undefined', function() {
    //     expect(isEven()).toBe(false);
    // });
});