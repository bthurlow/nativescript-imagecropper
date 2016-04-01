/**
* @Author: Brian Thurlow
* @Date:   03/29/2016 04:03:50 PM
* @Last modified by:   Brian Thurlow
* @Last modified time: 03/30/2016 02:04:35 PM
*/



var cameraModule = require("camera");
var icModule = require("nativescript-imagecropper");

var _page,_image1;
function pageLoaded(args) {
    _page = args.object;
    // page.bindingContext = vmModule.mainViewModel;
    _image1 = _page.getViewById("image1");
}
exports.pageLoaded = pageLoaded;

exports.tapCameraAction = function(args){
  cameraModule.takePicture({width:300,height:300,keepAspectRatio:true})
  .then(function(picture){
    var cropper = new icModule.ImageCropper();
    cropper.show(picture).then(function(args){
      console.log(JSON.stringify(args));
      if(args.image !== null){
        _image1.visibility = "visible";
        _image1.imageSource = args.image;
      }
      else{
        _image1.visibility = "collapsed";
      }
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
      if(args.image !== null){
        _image1.visibility = "visible";
        _image1.imageSource = args.image;
      }
      else{
        _image1.visibility = "collapsed";
      }
    })
    .catch(function(e){
      console.log(e);
    });
  })
  .catch(function(e){
    console.log(e);
  })
};
