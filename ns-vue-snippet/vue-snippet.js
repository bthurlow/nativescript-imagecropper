// Contributed by Lukas Park on 20 Oct 2017
const Vue = require("./nativescript-vue");
const ImageCropper = require("nativescript-imagecropper").ImageCropper;
const camera = require("nativescript-camera");
const imageSource = require("@nativescript/core/image-source");
const isAndroid = require("@nativescript/core/platform").isAndroid;

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
			const options = { lockSquare: true };
			const androidOptions = {
				isFreeStyleCropEnabled: true,
				statusBarColor: 'black',
				setAspectRatioOptions: {
						defaultIndex: 0,
						aspectRatios: [
								{
										aspectRatioTitle: '1:1',
										aspectRatioX: 1,
										aspectRatioY: 1
								},
								{
										aspectRatioTitle: '16:9',
										aspectRatioX: 16,
										aspectRatioY: 9
								},
								{
										aspectRatioTitle: '18:9',
										aspectRatioX: 18,
										aspectRatioY: 9
								}
						]
				}
			};
			var self = this;
			camera.takePicture({
				width: 800,
				keepAspectRatio: true,
				saveToGallery: false,
				cameraFacing: 'rear'
			})
			.then((imageAsset) => {
				let source = new imageSource.ImageSource();
				source.fromAsset(imageAsset).then((picture) => {
					setTimeout(async () => {
						imageCropper
						.show(picture, options, androidOptions)
						.then(args => {
								console.dir(args);
								if (args.image !== null) {
									self.image_src = args.image;
								}
						})
						.catch(function(e) {
								console.dir(e);
						});
					}, isAndroid ? 0 : 1000);
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
