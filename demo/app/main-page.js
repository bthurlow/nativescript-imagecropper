var cameraModule = require("camera");
var icModule = require("nativescript-imagecropper");

function pageLoaded(args) {
    var page = args.object;
    // page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;

exports.tapCameraAction = function(args){
  console.log("tapCameraAction");
  cameraModule.takePicture({width:300,height:300,keepAspectRatio:true})
  .then(function(picture){
    console.log("Picture Success!");
    var cropper = new icModule.ImageCropper();
    cropper.show(picture).then(function(args){
      console.log("Cropper Then");
      console.log(JSON.stringify(args));
    })
    .catch(function(e){
      console.log(e);
    });
  })
  .catch(function(e){
    console.log(e);
  })
};
exports.tapCameraActionResize = function(args){
  console.log("tapCameraAction");
  cameraModule.takePicture({width:300,height:300,keepAspectRatio:true})
  .then(function(picture){
    console.log("Picture Success!");
    var cropper = new icModule.ImageCropper();
    cropper.show(picture,{width:100,height:100}).then(function(args){
      console.log("Cropper Then");
      console.log(JSON.stringify(args));
    })
    .catch(function(e){
      console.log(e);
    });
  })
  .catch(function(e){
    console.log(e);
  })
};
