var Imagecropper = require("nativescript-imagecropper").Imagecropper;
var imagecropper = new Imagecropper();

describe("greet function", function() {
    it("exists", function() {
        expect(imagecropper.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imagecropper.greet()).toEqual("Hello, NS");
    });
});