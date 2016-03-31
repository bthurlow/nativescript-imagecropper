/**
* @Author: Brian Thurlow
* @Date:   03/29/2016 04:03:50 PM
* @Last modified by:   Brian Thurlow
* @Last modified time: 03/30/2016 02:04:35 PM
*/



var cameraModule = require("camera");
var icModule = require("nativescript-imagecropper");

var _page;
function pageLoaded(args) {
    _page = args.object;
    // page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;

exports.tapCameraAction = function(args){
  cameraModule.takePicture({width:300,height:300,keepAspectRatio:true})
  .then(function(picture){
    var cropper = new icModule.ImageCropper();
    cropper.show(picture).then(function(args){
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
  cameraModule.takePicture({width:300,height:300,keepAspectRatio:true})
  .then(function(picture){
    var cropper = new icModule.ImageCropper();
    cropper.show(picture,{width:100,height:100}).then(function(args){
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
