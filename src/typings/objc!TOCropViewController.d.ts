
declare class TOActivityCroppedImageProvider extends UIActivityItemProvider {

	static alloc(): TOActivityCroppedImageProvider; // inherited from NSObject

	static new(): TOActivityCroppedImageProvider; // inherited from NSObject

	readonly angle: number;

	readonly circular: boolean;

	readonly cropFrame: CGRect;

	readonly image: UIImage;

	constructor(o: { image: UIImage; cropFrame: CGRect; angle: number; circular: boolean; });

	initWithImageCropFrameAngleCircular(image: UIImage, cropFrame: CGRect, angle: number, circular: boolean): this;
}

declare class TOCropOverlayView extends UIView {

	static alloc(): TOCropOverlayView; // inherited from NSObject

	static appearance(): TOCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TOCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TOCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TOCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropOverlayView; // inherited from UIAppearance

	static new(): TOCropOverlayView; // inherited from NSObject

	displayHorizontalGridLines: boolean;

	displayVerticalGridLines: boolean;

	gridHidden: boolean;

	setGridHiddenAnimated(hidden: boolean, animated: boolean): void;
}

declare class TOCropScrollView extends UIScrollView {

	static alloc(): TOCropScrollView; // inherited from NSObject

	static appearance(): TOCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TOCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TOCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TOCropScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropScrollView; // inherited from UIAppearance

	static new(): TOCropScrollView; // inherited from NSObject

	touchesBegan: () => void;

	touchesCancelled: () => void;

	touchesEnded: () => void;
}

declare class TOCropToolbar extends UIView {

	static alloc(): TOCropToolbar; // inherited from NSObject

	static appearance(): TOCropToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TOCropToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TOCropToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TOCropToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropToolbar; // inherited from UIAppearance

	static new(): TOCropToolbar; // inherited from NSObject

	backgroundViewOutsets: UIEdgeInsets;

	cancelButtonTapped: () => void;

	readonly cancelIconButton: UIButton;

	readonly cancelTextButton: UIButton;

	cancelTextButtonTitle: string;

	readonly clampButton: UIButton;

	readonly clampButtonFrame: CGRect;

	clampButtonGlowing: boolean;

	clampButtonHidden: boolean;

	clampButtonTapped: () => void;

	readonly doneButtonFrame: CGRect;

	doneButtonTapped: () => void;

	readonly doneIconButton: UIButton;

	readonly doneTextButton: UIButton;

	doneTextButtonTitle: string;

	readonly resetButton: UIButton;

	resetButtonEnabled: boolean;

	resetButtonHidden: boolean;

	resetButtonTapped: () => void;

	readonly rotateButton: UIButton;

	readonly rotateClockwiseButton: UIButton;

	rotateClockwiseButtonHidden: boolean;

	rotateClockwiseButtonTapped: () => void;

	readonly rotateCounterclockwiseButton: UIButton;

	rotateCounterclockwiseButtonHidden: boolean;

	rotateCounterclockwiseButtonTapped: () => void;

	statusBarHeightInset: number;
}

declare class TOCropView extends UIView {

	static alloc(): TOCropView; // inherited from NSObject

	static appearance(): TOCropView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TOCropView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TOCropView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TOCropView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TOCropView; // inherited from UIAppearance

	static new(): TOCropView; // inherited from NSObject

	alwaysShowCroppingGrid: boolean;

	angle: number;

	aspectRatio: CGSize;

	aspectRatioLockDimensionSwapEnabled: boolean;

	aspectRatioLockEnabled: boolean;

	readonly canBeReset: boolean;

	cropAdjustingDelay: number;

	readonly cropBoxAspectRatioIsPortrait: boolean;

	readonly cropBoxFrame: CGRect;

	cropBoxResizeEnabled: boolean;

	cropRegionInsets: UIEdgeInsets;

	cropViewPadding: number;

	readonly croppingStyle: TOCropViewCroppingStyle;

	croppingViewsHidden: boolean;

	delegate: TOCropViewDelegate;

	readonly foregroundContainerView: UIView;

	gridOverlayHidden: boolean;

	readonly gridOverlayView: TOCropOverlayView;

	readonly image: UIImage;

	imageCropFrame: CGRect;

	readonly imageViewFrame: CGRect;

	internalLayoutDisabled: boolean;

	maximumZoomScale: number;

	minimumAspectRatio: number;

	resetAspectRatioEnabled: boolean;

	simpleRenderMode: boolean;

	translucencyAlwaysHidden: boolean;

	constructor(o: { croppingStyle: TOCropViewCroppingStyle; image: UIImage; });

	constructor(o: { image: UIImage; });

	initWithCroppingStyleImage(style: TOCropViewCroppingStyle, image: UIImage): this;

	initWithImage(image: UIImage): this;

	moveCroppedContentToCenterAnimated(animated: boolean): void;

	performInitialSetup(): void;

	performRelayoutForRotation(): void;

	prepareforRotation(): void;

	resetLayoutToDefaultAnimated(animated: boolean): void;

	rotateImageNinetyDegreesAnimated(animated: boolean): void;

	rotateImageNinetyDegreesAnimatedClockwise(animated: boolean, clockwise: boolean): void;

	setAspectRatioAnimated(aspectRatio: CGSize, animated: boolean): void;

	setBackgroundImageViewHiddenAnimated(hidden: boolean, animated: boolean): void;

	setCroppingViewsHiddenAnimated(hidden: boolean, animated: boolean): void;

	setGridOverlayHiddenAnimated(gridOverlayHidden: boolean, animated: boolean): void;

	setSimpleRenderModeAnimated(simpleMode: boolean, animated: boolean): void;
}

declare class TOCropViewController extends UIViewController {

	static alloc(): TOCropViewController; // inherited from NSObject

	static new(): TOCropViewController; // inherited from NSObject

	activityItems: NSArray<any>;

	allowedAspectRatios: NSArray<number>;

	angle: number;

	applicationActivities: NSArray<UIActivity>;

	aspectRatioLockDimensionSwapEnabled: boolean;

	aspectRatioLockEnabled: boolean;

	aspectRatioPickerButtonHidden: boolean;

	aspectRatioPreset: TOCropViewControllerAspectRatioPreset;

	cancelButtonTitle: string;

	readonly cropView: TOCropView;

	readonly croppingStyle: TOCropViewCroppingStyle;

	customAspectRatio: CGSize;

	customAspectRatioName: string;

	delegate: TOCropViewControllerDelegate;

	doneButtonTitle: string;

	excludedActivityTypes: NSArray<string>;

	hidesNavigationBar: boolean;

	readonly image: UIImage;

	imageCropFrame: CGRect;

	minimumAspectRatio: number;

	onDidCropImageToRect: (p1: CGRect, p2: number) => void;

	onDidCropToCircleImage: (p1: UIImage, p2: CGRect, p3: number) => void;

	onDidCropToRect: (p1: UIImage, p2: CGRect, p3: number) => void;

	onDidFinishCancelled: (p1: boolean) => void;

	resetAspectRatioEnabled: boolean;

	resetButtonHidden: boolean;

	rotateButtonsHidden: boolean;

	rotateClockwiseButtonHidden: boolean;

	showActivitySheetOnDone: boolean;

	showCancelConfirmationDialog: boolean;

	readonly titleLabel: UILabel;

	readonly toolbar: TOCropToolbar;

	toolbarPosition: TOCropViewControllerToolbarPosition;

	constructor(o: { croppingStyle: TOCropViewCroppingStyle; image: UIImage; });

	constructor(o: { image: UIImage; });

	dismissAnimatedFromParentViewControllerToViewToFrameSetupCompletion(viewController: UIViewController, toView: UIView, frame: CGRect, setup: () => void, completion: () => void): void;

	dismissAnimatedFromParentViewControllerWithCroppedImageToViewToFrameSetupCompletion(viewController: UIViewController, image: UIImage, toView: UIView, frame: CGRect, setup: () => void, completion: () => void): void;

	initWithCroppingStyleImage(style: TOCropViewCroppingStyle, image: UIImage): this;

	initWithImage(image: UIImage): this;

	presentAnimatedFromParentViewControllerFromImageFromViewFromFrameAngleToImageFrameSetupCompletion(viewController: UIViewController, image: UIImage, fromView: UIView, fromFrame: CGRect, angle: number, toFrame: CGRect, setup: () => void, completion: () => void): void;

	presentAnimatedFromParentViewControllerFromViewFromFrameSetupCompletion(viewController: UIViewController, fromView: UIView, fromFrame: CGRect, setup: () => void, completion: () => void): void;

	resetCropViewLayout(): void;

	setAspectRatioPresetAnimated(aspectRatioPreset: TOCropViewControllerAspectRatioPreset, animated: boolean): void;
}

declare const enum TOCropViewControllerAspectRatioPreset {

	PresetOriginal = 0,

	PresetSquare = 1,

	Preset3x2 = 2,

	Preset5x3 = 3,

	Preset4x3 = 4,

	Preset5x4 = 5,

	Preset7x5 = 6,

	Preset16x9 = 7,

	PresetCustom = 8
}

interface TOCropViewControllerDelegate extends NSObjectProtocol {

	cropViewControllerDidCropImageToRectAngle?(cropViewController: TOCropViewController, cropRect: CGRect, angle: number): void;

	cropViewControllerDidCropToCircularImageWithRectAngle?(cropViewController: TOCropViewController, image: UIImage, cropRect: CGRect, angle: number): void;

	cropViewControllerDidCropToImageWithRectAngle?(cropViewController: TOCropViewController, image: UIImage, cropRect: CGRect, angle: number): void;

	cropViewControllerDidFinishCancelled?(cropViewController: TOCropViewController, cancelled: boolean): void;
}
declare var TOCropViewControllerDelegate: {

	prototype: TOCropViewControllerDelegate;
};

declare const enum TOCropViewControllerToolbarPosition {

	Bottom = 0,

	Top = 1
}

declare class TOCropViewControllerTransitioning extends NSObject implements UIViewControllerAnimatedTransitioning {

	static alloc(): TOCropViewControllerTransitioning; // inherited from NSObject

	static new(): TOCropViewControllerTransitioning; // inherited from NSObject

	fromFrame: CGRect;

	fromView: UIView;

	image: UIImage;

	isDismissing: boolean;

	prepareForTransitionHandler: () => void;

	toFrame: CGRect;

	toView: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animateTransition(transitionContext: UIViewControllerContextTransitioning): void;

	animationEnded(transitionCompleted: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	interruptibleAnimatorForTransition(transitionContext: UIViewControllerContextTransitioning): UIViewImplicitlyAnimating;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reset(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	transitionDuration(transitionContext: UIViewControllerContextTransitioning): number;
}

declare var TOCropViewControllerVersionNumber: number;

declare var TOCropViewControllerVersionString: interop.Reference<number>;

declare const enum TOCropViewCroppingStyle {

	Default = 0,

	Circular = 1
}

interface TOCropViewDelegate extends NSObjectProtocol {

	cropViewDidBecomeNonResettable(cropView: TOCropView): void;

	cropViewDidBecomeResettable(cropView: TOCropView): void;
}
declare var TOCropViewDelegate: {

	prototype: TOCropViewDelegate;
};

declare class TOCroppedImageAttributes extends NSObject {

	static alloc(): TOCroppedImageAttributes; // inherited from NSObject

	static new(): TOCroppedImageAttributes; // inherited from NSObject

	readonly angle: number;

	readonly croppedFrame: CGRect;

	readonly originalImageSize: CGSize;

	constructor(o: { croppedFrame: CGRect; angle: number; originalImageSize: CGSize; });

	initWithCroppedFrameAngleOriginalImageSize(croppedFrame: CGRect, angle: number, originalSize: CGSize): this;
}
