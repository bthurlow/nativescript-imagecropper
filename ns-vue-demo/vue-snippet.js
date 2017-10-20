const Vue = require("./nativescript-vue");
const ImageCropper = require("nativescript-imagecropper").ImageCropper;
const camera = require("nativescript-camera");
const imageSource = require("image-source");

new Vue({
	data: function() {
		var obj = {
			image_src: ""
		}
		return obj;
	},
	mounted: function() {
		setTimeout(() => {
			camera.requestPermissions();
		});
	},
	methods: {
		do_capture: function() {
			var self = this;
			camera.takePicture({width:300,height:300,keepAspectRatio:true})
			.then((imageAsset) => {
				let source = new imageSource.ImageSource();
				source.fromAsset(imageAsset).then((picture) => {
					var imageCropper = new ImageCropper();
					imageCropper.show(picture).then(function(args){
						self.image_src = args.image;
					})
					.catch(function(e){
						console.log(e);
					});
				});
			}).catch((err) => {
				console.log("Error -> " + err.message);
			});
		}
	},
	template: `
		<page class="page">
			<action-bar title="Home" class="action-bar"></action-bar>
			<scroll-view>
				<stack-layout class="home-panel">
					<!--Add your page content here-->
					<button textWrap="true" class="h2 description-label" v-on:tap="do_capture">Tap for Cam</button>
					<image v-bind:src="image_src" />
				</stack-layout>
			</scroll-view>
		</page>
	`,
}).$start();
