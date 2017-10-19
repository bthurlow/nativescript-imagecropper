var Imagecropper = require("nativescript-imagecropper").Imagecropper;
var imagecropper = new Imagecropper();

describe("show function", function() {
    it("exists", function() {
        expect(imagecropper.show).toBeDefined();
    });
});