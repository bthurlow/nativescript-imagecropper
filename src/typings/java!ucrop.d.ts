/* tslint:disable */
/// <reference path="../temp/out/_helpers.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export class BuildConfig {
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

import androidnetUri = android.net.Uri;
import androidappActivity = android.app.Activity;
import androidcontentContext = android.content.Context;
import androidappFragment = android.app.Fragment;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import androidcontentIntent = android.content.Intent;
import javalangThrowable = java.lang.Throwable;
import androidosBundle = android.os.Bundle;
import androidgraphicsBitmapCompressFormat = android.graphics.Bitmap.CompressFormat;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Fragment.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.AspectRatio.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export class UCrop {
				public static REQUEST_CROP: number;
				public static RESULT_ERROR: number;
				public static EXTRA_INPUT_URI: string;
				public static EXTRA_OUTPUT_URI: string;
				public static EXTRA_OUTPUT_CROP_ASPECT_RATIO: string;
				public static EXTRA_OUTPUT_IMAGE_WIDTH: string;
				public static EXTRA_OUTPUT_IMAGE_HEIGHT: string;
				public static EXTRA_OUTPUT_OFFSET_X: string;
				public static EXTRA_OUTPUT_OFFSET_Y: string;
				public static EXTRA_ERROR: string;
				public static EXTRA_ASPECT_RATIO_X: string;
				public static EXTRA_ASPECT_RATIO_Y: string;
				public static EXTRA_MAX_SIZE_X: string;
				public static EXTRA_MAX_SIZE_Y: string;
				public start(param0: androidcontentContext, param1: androidsupportv4appFragment): void;
				public start(param0: androidcontentContext, param1: androidsupportv4appFragment, param2: number): void;
				public useSourceImageAspectRatio(): com.yalantis.ucrop.UCrop;
				public withMaxResultSize(param0: number, param1: number): com.yalantis.ucrop.UCrop;
				public static getOutputImageWidth(param0: androidcontentIntent): number;
				public start(param0: androidappActivity, param1: number): void;
				public static getOutputCropAspectRatio(param0: androidcontentIntent): number;
				public start(param0: androidappActivity): void;
				public withOptions(param0: com.yalantis.ucrop.UCrop.Options): com.yalantis.ucrop.UCrop;
				public static getOutput(param0: androidcontentIntent): androidnetUri;
				public static getOutputImageHeight(param0: androidcontentIntent): number;
				public static getError(param0: androidcontentIntent): javalangThrowable;
				public static of(param0: androidnetUri, param1: androidnetUri): com.yalantis.ucrop.UCrop;
				public start(param0: androidcontentContext, param1: androidappFragment): void;
				public withAspectRatio(param0: number, param1: number): com.yalantis.ucrop.UCrop;
				public getIntent(param0: androidcontentContext): androidcontentIntent;
				public start(param0: androidcontentContext, param1: androidappFragment, param2: number): void;
			}
			export module UCrop {
				export class Options {
					public static EXTRA_COMPRESSION_FORMAT_NAME: string;
					public static EXTRA_COMPRESSION_QUALITY: string;
					public static EXTRA_ALLOWED_GESTURES: string;
					public static EXTRA_MAX_BITMAP_SIZE: string;
					public static EXTRA_MAX_SCALE_MULTIPLIER: string;
					public static EXTRA_IMAGE_TO_CROP_BOUNDS_ANIM_DURATION: string;
					public static EXTRA_DIMMED_LAYER_COLOR: string;
					public static EXTRA_CIRCLE_DIMMED_LAYER: string;
					public static EXTRA_SHOW_CROP_FRAME: string;
					public static EXTRA_CROP_FRAME_COLOR: string;
					public static EXTRA_CROP_FRAME_STROKE_WIDTH: string;
					public static EXTRA_SHOW_CROP_GRID: string;
					public static EXTRA_CROP_GRID_ROW_COUNT: string;
					public static EXTRA_CROP_GRID_COLUMN_COUNT: string;
					public static EXTRA_CROP_GRID_COLOR: string;
					public static EXTRA_CROP_GRID_STROKE_WIDTH: string;
					public static EXTRA_TOOL_BAR_COLOR: string;
					public static EXTRA_STATUS_BAR_COLOR: string;
					public static EXTRA_UCROP_COLOR_WIDGET_ACTIVE: string;
					public static EXTRA_UCROP_WIDGET_COLOR_TOOLBAR: string;
					public static EXTRA_UCROP_TITLE_TEXT_TOOLBAR: string;
					public static EXTRA_UCROP_WIDGET_CANCEL_DRAWABLE: string;
					public static EXTRA_UCROP_WIDGET_CROP_DRAWABLE: string;
					public static EXTRA_UCROP_LOGO_COLOR: string;
					public static EXTRA_HIDE_BOTTOM_CONTROLS: string;
					public static EXTRA_FREE_STYLE_CROP: string;
					public static EXTRA_ASPECT_RATIO_SELECTED_BY_DEFAULT: string;
					public static EXTRA_ASPECT_RATIO_OPTIONS: string;
					public static EXTRA_UCROP_ROOT_VIEW_BACKGROUND_COLOR: string;
					public setAllowedGestures(param0: number, param1: number, param2: number): void;
					public setImageToCropBoundsAnimDuration(param0: number): void;
					public setActiveWidgetColor(param0: number): void;
					public setAspectRatioOptions(param0: number, param1: native.Array<com.yalantis.ucrop.model.AspectRatio>): void;
					public setMaxBitmapSize(param0: number): void;
					public getOptionBundle(): androidosBundle;
					public setToolbarColor(param0: number): void;
					public setToolbarCancelDrawable(param0: number): void;
					public setCropGridColumnCount(param0: number): void;
					public setLogoColor(param0: number): void;
					public setFreeStyleCropEnabled(param0: boolean): void;
					public constructor();
					public setCircleDimmedLayer(param0: boolean): void;
					public setDimmedLayerColor(param0: number): void;
					public setCropGridRowCount(param0: number): void;
					public setCropGridStrokeWidth(param0: number): void;
					public setToolbarCropDrawable(param0: number): void;
					public setCropFrameColor(param0: number): void;
					public setRootViewBackgroundColor(param0: number): void;
					public setCompressionQuality(param0: number): void;
					public setCropGridColor(param0: number): void;
					public setStatusBarColor(param0: number): void;
					public setToolbarTitle(param0: string): void;
					public useSourceImageAspectRatio(): void;
					public setCropFrameStrokeWidth(param0: number): void;
					public setToolbarWidgetColor(param0: number): void;
					public withAspectRatio(param0: number, param1: number): void;
					public setHideBottomControls(param0: boolean): void;
					public setShowCropGrid(param0: boolean): void;
					public withMaxResultSize(param0: number, param1: number): void;
					public setCompressionFormat(param0: androidgraphicsBitmapCompressFormat): void;
					public setShowCropFrame(param0: boolean): void;
					public setMaxScaleMultiplier(param0: number): void;
				}
			}
		}
	}
}

import androidviewMenu = android.view.Menu;
import androidviewMenuItem = android.view.MenuItem;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export class UCropActivity {
				public static DEFAULT_COMPRESS_QUALITY: number;
				public static DEFAULT_COMPRESS_FORMAT: androidgraphicsBitmapCompressFormat;
				public static NONE: number;
				public static SCALE: number;
				public static ROTATE: number;
				public static ALL: number;
				public onCreate(param0: androidosBundle): void;
				public onPrepareOptionsMenu(param0: androidviewMenu): boolean;
				public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
				public onCreateOptionsMenu(param0: androidviewMenu): boolean;
				public onStop(): void;
				public cropAndSaveImage(): void;
				public setResultUri(param0: androidnetUri, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public constructor();
				public setResultError(param0: javalangThrowable): void;
			}
			export module UCropActivity {
				export class GestureTypes {
					/**
					 * Constructs a new instance of the com.yalantis.ucrop.UCropActivity$GestureTypes interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module callback {
				export class BitmapCropCallback {
					/**
					 * Constructs a new instance of the com.yalantis.ucrop.callback.BitmapCropCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onBitmapCropped(param0: androidnetUri, param1: number, param2: number, param3: number, param4: number): void;
						onCropFailure(param0: javalangThrowable): void;
					});
					public onCropFailure(param0: javalangThrowable): void;
					public onBitmapCropped(param0: androidnetUri, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
import javalangException = java.lang.Exception;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.ExifInfo.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module callback {
				export class BitmapLoadCallback {
					/**
					 * Constructs a new instance of the com.yalantis.ucrop.callback.BitmapLoadCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onBitmapLoaded(param0: androidgraphicsBitmap, param1: com.yalantis.ucrop.model.ExifInfo, param2: string, param3: string): void;
						onFailure(param0: javalangException): void;
					});
					public onFailure(param0: javalangException): void;
					public onBitmapLoaded(param0: androidgraphicsBitmap, param1: com.yalantis.ucrop.model.ExifInfo, param2: string, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module yalantis {
		export module ucrop {
			export module callback {
				export class CropBoundsChangeListener {
					/**
					 * Constructs a new instance of the com.yalantis.ucrop.callback.CropBoundsChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCropAspectRatioChanged(param0: number): void;
					});
					public onCropAspectRatioChanged(param0: number): void;
				}
			}
		}
	}
}

import androidgraphicsRectF = android.graphics.RectF;
/// <reference path="./android.graphics.RectF.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module callback {
				export class OverlayViewChangeListener {
					/**
					 * Constructs a new instance of the com.yalantis.ucrop.callback.OverlayViewChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCropRectUpdated(param0: androidgraphicsRectF): void;
					});
					public onCropRectUpdated(param0: androidgraphicsRectF): void;
				}
			}
		}
	}
}

import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module model {
				export class AspectRatio {
					public static CREATOR: androidosParcelableCreator;
					public getAspectRatioTitle(): string;
					public constructor(param0: androidosParcel);
					public describeContents(): number;
					public constructor(param0: string, param1: number, param2: number);
					public writeToParcel(param0: androidosParcel, param1: number): void;
					public getAspectRatioX(): number;
					public getAspectRatioY(): number;
				}
			}
		}
	}
}

/// <reference path="./com.yalantis.ucrop.model.ExifInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module model {
				export class CropParameters {
					public constructor(param0: number, param1: number, param2: androidgraphicsBitmapCompressFormat, param3: number, param4: string, param5: string, param6: com.yalantis.ucrop.model.ExifInfo);
					public getCompressFormat(): androidgraphicsBitmapCompressFormat;
					public getExifInfo(): com.yalantis.ucrop.model.ExifInfo;
					public getCompressQuality(): number;
					public getImageOutputPath(): string;
					public getImageInputPath(): string;
					public getMaxResultImageSizeY(): number;
					public getMaxResultImageSizeX(): number;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module model {
				export class ExifInfo {
					public getExifDegrees(): number;
					public equals(param0: javalangObject): boolean;
					public constructor(param0: number, param1: number, param2: number);
					public setExifDegrees(param0: number): void;
					public getExifTranslation(): number;
					public setExifOrientation(param0: number): void;
					public getExifOrientation(): number;
					public hashCode(): number;
					public setExifTranslation(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.RectF.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module model {
				export class ImageState {
					public constructor(param0: androidgraphicsRectF, param1: androidgraphicsRectF, param2: number, param3: number);
					public getCurrentImageRect(): androidgraphicsRectF;
					public getCurrentScale(): number;
					public getCurrentAngle(): number;
					public getCropRect(): androidgraphicsRectF;
				}
			}
		}
	}
}

import javalangVoid = java.lang.Void;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.BitmapCropCallback.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.CropParameters.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.ImageState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module task {
				export class BitmapCropTask {
					public constructor(param0: androidgraphicsBitmap, param1: com.yalantis.ucrop.model.ImageState, param2: com.yalantis.ucrop.model.CropParameters, param3: com.yalantis.ucrop.callback.BitmapCropCallback);
					public doInBackground(param0: native.Array<javalangVoid>): javalangThrowable;
					public onPostExecute(param0: javalangThrowable): void;
					public static cropCImg(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.BitmapLoadCallback.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.ExifInfo.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module task {
				export class BitmapLoadTask {
					public constructor(param0: androidcontentContext, param1: androidnetUri, param2: androidnetUri, param3: number, param4: number, param5: com.yalantis.ucrop.callback.BitmapLoadCallback);
					public doInBackground(param0: native.Array<javalangVoid>): com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult;
					public onPostExecute(param0: com.yalantis.ucrop.task.BitmapLoadTask.BitmapWorkerResult): void;
				}
				export module BitmapLoadTask {
					export class BitmapWorkerResult {
						public constructor(param0: androidgraphicsBitmap, param1: com.yalantis.ucrop.model.ExifInfo);
						public constructor(param0: javalangException);
					}
				}
			}
		}
	}
}

import androidgraphicsMatrix = android.graphics.Matrix;
import androidgraphicsBitmapFactoryOptions = android.graphics.BitmapFactory.Options;
import javaioCloseable = java.io.Closeable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.BitmapLoadCallback.d.ts" />
/// <reference path="./java.io.Closeable.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class BitmapLoadUtils {
					public static calculateInSampleSize(param0: androidgraphicsBitmapFactoryOptions, param1: number, param2: number): number;
					public static exifToTranslation(param0: number): number;
					public static calculateMaxBitmapSize(param0: androidcontentContext): number;
					public constructor();
					public static close(param0: javaioCloseable): void;
					public static getExifOrientation(param0: androidcontentContext, param1: androidnetUri): number;
					public static decodeBitmapInBackground(param0: androidcontentContext, param1: androidnetUri, param2: androidnetUri, param3: number, param4: number, param5: com.yalantis.ucrop.callback.BitmapLoadCallback): void;
					public static transformBitmap(param0: androidgraphicsBitmap, param1: androidgraphicsMatrix): androidgraphicsBitmap;
					public static exifToDegrees(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class CubicEasing {
					public static easeInOut(param0: number, param1: number, param2: number, param3: number): number;
					public constructor();
					public static easeIn(param0: number, param1: number, param2: number, param3: number): number;
					public static easeOut(param0: number, param1: number, param2: number, param3: number): number;
				}
			}
		}
	}
}

declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class EglUtils {
					public static getMaxTextureSize(): number;
				}
			}
		}
	}
}

import androidgraphicsCanvas = android.graphics.Canvas;
import androidgraphicsColorFilter = android.graphics.ColorFilter;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class FastBitmapDrawable {
					public constructor(param0: androidgraphicsBitmap);
					public getAlpha(): number;
					public getMinimumWidth(): number;
					public getBitmap(): androidgraphicsBitmap;
					public getIntrinsicHeight(): number;
					public setBitmap(param0: androidgraphicsBitmap): void;
					public setColorFilter(param0: androidgraphicsColorFilter): void;
					public getIntrinsicWidth(): number;
					public setAlpha(param0: number): void;
					public setFilterBitmap(param0: boolean): void;
					public draw(param0: androidgraphicsCanvas): void;
					public getMinimumHeight(): number;
					public getOpacity(): number;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class FileUtils {
					public static getPath(param0: androidcontentContext, param1: androidnetUri): string;
					public static copyFile(param0: string, param1: string): void;
					public static isDownloadsDocument(param0: androidnetUri): boolean;
					public static isGooglePhotosUri(param0: androidnetUri): boolean;
					public static isMediaDocument(param0: androidnetUri): boolean;
					public static isExternalStorageDocument(param0: androidnetUri): boolean;
					public static getDataColumn(param0: androidcontentContext, param1: androidnetUri, param2: string, param3: native.Array<string>): string;
				}
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
import androidmediaExifInterface = android.media.ExifInterface;
import javanioByteOrder = java.nio.ByteOrder;
/// <reference path="./android.media.ExifInterface.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteOrder.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class ImageHeaderParser {
					public static UNKNOWN_ORIENTATION: number;
					public constructor(param0: javaioInputStream);
					public getOrientation(): number;
					public static copyExif(param0: androidmediaExifInterface, param1: number, param2: number, param3: string): void;
				}
				export module ImageHeaderParser {
					export class RandomAccessReader {
						public constructor(param0: native.Array<number>, param1: number);
						public order(param0: javanioByteOrder): void;
						public length(): number;
						public getInt32(param0: number): number;
						public getInt16(param0: number): number;
					}
					export class Reader {
						/**
						 * Constructs a new instance of the com.yalantis.ucrop.util.ImageHeaderParser$Reader interface with the provided implementation.
						 */
						public constructor(implementation: {
							getUInt16(): number;
							getUInt8(): number;
							skip(param0: number): number;
							read(param0: native.Array<number>, param1: number): number;
						});
						public skip(param0: number): number;
						public getUInt16(): number;
						public getUInt8(): number;
						public read(param0: native.Array<number>, param1: number): number;
					}
					export class StreamReader {
						public skip(param0: number): number;
						public getUInt16(): number;
						public constructor(param0: javaioInputStream);
						public getUInt8(): number;
						public read(param0: native.Array<number>, param1: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.RectF.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class RectUtils {
					public static getCornersFromRect(param0: androidgraphicsRectF): native.Array<number>;
					public static getCenterFromRect(param0: androidgraphicsRectF): native.Array<number>;
					public constructor();
					public static getRectSidesFromCorners(param0: native.Array<number>): native.Array<number>;
					public static trapToRect(param0: native.Array<number>): androidgraphicsRectF;
				}
			}
		}
	}
}

import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.yalantis.ucrop.util.RotationGestureDetector.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class RotationGestureDetector {
					public constructor(param0: com.yalantis.ucrop.util.RotationGestureDetector.OnRotationGestureListener);
					public getAngle(): number;
					public onTouchEvent(param0: androidviewMotionEvent): boolean;
				}
				export module RotationGestureDetector {
					export class OnRotationGestureListener {
						/**
						 * Constructs a new instance of the com.yalantis.ucrop.util.RotationGestureDetector$OnRotationGestureListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
						});
						public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
					}
					export class SimpleOnRotationGestureListener {
						public constructor();
						public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module util {
				export class SelectedStateListDrawable {
					public constructor(param0: androidgraphicsdrawableDrawable, param1: number);
					public onStateChange(param0: native.Array<number>): boolean;
					public isStateful(): boolean;
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
import androidcontentresTypedArray = android.content.res.TypedArray;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.BitmapCropCallback.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.CropBoundsChangeListener.d.ts" />
/// <reference path="./com.yalantis.ucrop.view.CropImageView.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export class CropImageView extends com.yalantis.ucrop.view.TransformImageView {
					public static DEFAULT_MAX_BITMAP_SIZE: number;
					public static DEFAULT_IMAGE_TO_CROP_BOUNDS_ANIM_DURATION: number;
					public static DEFAULT_MAX_SCALE_MULTIPLIER: number;
					public static SOURCE_IMAGE_ASPECT_RATIO: number;
					public static DEFAULT_ASPECT_RATIO: number;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public zoomInImage(param0: number, param1: number, param2: number): void;
					public postRotate(param0: number, param1: number, param2: number): void;
					public setCropRect(param0: androidgraphicsRectF): void;
					public processStyledAttributes(param0: androidcontentresTypedArray): void;
					public cropAndSaveImage(param0: androidgraphicsBitmapCompressFormat, param1: number, param2: com.yalantis.ucrop.callback.BitmapCropCallback): void;
					public getCropBoundsChangeListener(): com.yalantis.ucrop.callback.CropBoundsChangeListener;
					public setMaxResultImageSizeX(param0: number): void;
					public zoomOutImage(param0: number): void;
					public cancelAllAnimations(): void;
					public getMinScale(): number;
					public getTargetAspectRatio(): number;
					public zoomImageToPosition(param0: number, param1: number, param2: number, param3: number): void;
					public setTargetAspectRatio(param0: number): void;
					public isImageWrapCropBounds(param0: native.Array<number>): boolean;
					public postScale(param0: number, param1: number, param2: number): void;
					public postRotate(param0: number): void;
					public setImageToWrapCropBoundsAnimDuration(param0: number): void;
					public onImageLaidOut(): void;
					public setCropBoundsChangeListener(param0: com.yalantis.ucrop.callback.CropBoundsChangeListener): void;
					public isImageWrapCropBounds(): boolean;
					public setMaxResultImageSizeY(param0: number): void;
					public setImageToWrapCropBounds(param0: boolean): void;
					public getMaxScale(): number;
					public zoomInImage(param0: number): void;
					public zoomOutImage(param0: number, param1: number, param2: number): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public setImageToWrapCropBounds(): void;
					public constructor(param0: androidcontentContext);
					public setMaxScaleMultiplier(param0: number): void;
				}
				export module CropImageView {
					export class WrapCropBoundsRunnable {
						public run(): void;
						public constructor(param0: com.yalantis.ucrop.view.CropImageView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: boolean);
					}
					export class ZoomImageToPosition {
						public run(): void;
						public constructor(param0: com.yalantis.ucrop.view.CropImageView, param1: number, param2: number, param3: number, param4: number, param5: number);
					}
				}
			}
		}
	}
}

import androidviewScaleGestureDetector = android.view.ScaleGestureDetector;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ScaleGestureDetector.d.ts" />
/// <reference path="./com.yalantis.ucrop.util.RotationGestureDetector.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export class GestureCropImageView extends com.yalantis.ucrop.view.CropImageView {
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public onTouchEvent(param0: androidviewMotionEvent): boolean;
					public isRotateEnabled(): boolean;
					public getDoubleTapScaleSteps(): number;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public isScaleEnabled(): boolean;
					public constructor(param0: androidcontentContext);
					public init(): void;
					public setScaleEnabled(param0: boolean): void;
					public setRotateEnabled(param0: boolean): void;
					public setDoubleTapScaleSteps(param0: number): void;
					public getDoubleTapTargetScale(): number;
				}
				export module GestureCropImageView {
					export class GestureListener {
						public onDoubleTap(param0: androidviewMotionEvent): boolean;
						public onScroll(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					}
					export class RotateListener extends com.yalantis.ucrop.util.RotationGestureDetector.SimpleOnRotationGestureListener {
						public onRotation(param0: com.yalantis.ucrop.util.RotationGestureDetector): boolean;
					}
					export class ScaleListener {
						public onScale(param0: androidviewScaleGestureDetector): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.yalantis.ucrop.callback.OverlayViewChangeListener.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export class OverlayView {
					public static FREESTYLE_CROP_MODE_DISABLE: number;
					public static FREESTYLE_CROP_MODE_ENABLE: number;
					public static FREESTYLE_CROP_MODE_ENABLE_WITH_PASS_THROUGH: number;
					public static DEFAULT_SHOW_CROP_FRAME: boolean;
					public static DEFAULT_SHOW_CROP_GRID: boolean;
					public static DEFAULT_CIRCLE_DIMMED_LAYER: boolean;
					public static DEFAULT_FREESTYLE_CROP_MODE: number;
					public static DEFAULT_CROP_GRID_ROW_COUNT: number;
					public static DEFAULT_CROP_GRID_COLUMN_COUNT: number;
					public mThisWidth: number;
					public mThisHeight: number;
					public mCropGridCorners: native.Array<number>;
					public mCropGridCenter: native.Array<number>;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public onTouchEvent(param0: androidviewMotionEvent): boolean;
					public setDimmedColor(param0: number): void;
					public onDraw(param0: androidgraphicsCanvas): void;
					public processStyledAttributes(param0: androidcontentresTypedArray): void;
					public setCropGridColumnCount(param0: number): void;
					public getOverlayViewChangeListener(): com.yalantis.ucrop.callback.OverlayViewChangeListener;
					public setTargetAspectRatio(param0: number): void;
					public setCircleDimmedLayer(param0: boolean): void;
					public setCropGridRowCount(param0: number): void;
					public setCropGridStrokeWidth(param0: number): void;
					public drawCropGrid(param0: androidgraphicsCanvas): void;
					public setCropFrameColor(param0: number): void;
					public setCropGridColor(param0: number): void;
					public init(): void;
					public setCropFrameStrokeWidth(param0: number): void;
					public getFreestyleCropMode(): number;
					public setFreestyleCropEnabled(param0: boolean): void;
					public drawDimmedLayer(param0: androidgraphicsCanvas): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public setFreestyleCropMode(param0: number): void;
					public setShowCropGrid(param0: boolean): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public isFreestyleCropEnabled(): boolean;
					public constructor(param0: androidcontentContext);
					public setShowCropFrame(param0: boolean): void;
					public setupCropBounds(): void;
					public getCropViewRect(): androidgraphicsRectF;
					public setOverlayViewChangeListener(param0: com.yalantis.ucrop.callback.OverlayViewChangeListener): void;
				}
				export module OverlayView {
					export class FreestyleMode {
						/**
						 * Constructs a new instance of the com.yalantis.ucrop.view.OverlayView$FreestyleMode interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

import androidwidgetImageViewScaleType = android.widget.ImageView.ScaleType;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.ExifInfo.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export class TransformImageView {
					public mCurrentImageCorners: native.Array<number>;
					public mCurrentImageCenter: native.Array<number>;
					public mCurrentImageMatrix: androidgraphicsMatrix;
					public mThisWidth: number;
					public mThisHeight: number;
					public mTransformImageListener: com.yalantis.ucrop.view.TransformImageView.TransformImageListener;
					public mBitmapDecoded: boolean;
					public mBitmapLaidOut: boolean;
					public getMatrixValue(param0: androidgraphicsMatrix, param1: number): number;
					public getMaxBitmapSize(): number;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public postRotate(param0: number, param1: number, param2: number): void;
					public setImageUri(param0: androidnetUri, param1: androidnetUri): void;
					public setMaxBitmapSize(param0: number): void;
					public setTransformImageListener(param0: com.yalantis.ucrop.view.TransformImageView.TransformImageListener): void;
					public postTranslate(param0: number, param1: number): void;
					public getExifInfo(): com.yalantis.ucrop.model.ExifInfo;
					public getImageInputPath(): string;
					public getMatrixAngle(param0: androidgraphicsMatrix): number;
					public postScale(param0: number, param1: number, param2: number): void;
					public setImageMatrix(param0: androidgraphicsMatrix): void;
					public setScaleType(param0: androidwidgetImageViewScaleType): void;
					public onImageLaidOut(): void;
					public getMatrixScale(param0: androidgraphicsMatrix): number;
					public getCurrentScale(): number;
					public getViewBitmap(): androidgraphicsBitmap;
					public getImageOutputPath(): string;
					public setImageBitmap(param0: androidgraphicsBitmap): void;
					public init(): void;
					public printMatrix(param0: string, param1: androidgraphicsMatrix): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getCurrentAngle(): number;
					public constructor(param0: androidcontentContext);
				}
				export module TransformImageView {
					export class TransformImageListener {
						/**
						 * Constructs a new instance of the com.yalantis.ucrop.view.TransformImageView$TransformImageListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLoadComplete(): void;
							onLoadFailure(param0: javalangException): void;
							onRotate(param0: number): void;
							onScale(param0: number): void;
						});
						public onLoadFailure(param0: javalangException): void;
						public onRotate(param0: number): void;
						public onScale(param0: number): void;
						public onLoadComplete(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.yalantis.ucrop.view.GestureCropImageView.d.ts" />
/// <reference path="./com.yalantis.ucrop.view.OverlayView.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export class UCropView {
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public getCropImageView(): com.yalantis.ucrop.view.GestureCropImageView;
					public resetCropImageView(): void;
					public getOverlayView(): com.yalantis.ucrop.view.OverlayView;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.yalantis.ucrop.model.AspectRatio.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export module widget {
					export class AspectRatioTextView {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setActiveColor(param0: number): void;
						public getAspectRatio(param0: boolean): number;
						public onDraw(param0: androidgraphicsCanvas): void;
						public setAspectRatio(param0: com.yalantis.ucrop.model.AspectRatio): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public constructor(param0: androidcontentContext);
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
declare module com {
	export module yalantis {
		export module ucrop {
			export module view {
				export module widget {
					export class HorizontalProgressWheelView {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setScrollingListener(param0: com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.ScrollingListener): void;
						public onDraw(param0: androidgraphicsCanvas): void;
						public setMiddleLineColor(param0: number): void;
						public onTouchEvent(param0: androidviewMotionEvent): boolean;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public constructor(param0: androidcontentContext);
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
					}
					export module HorizontalProgressWheelView {
						export class ScrollingListener {
							/**
							 * Constructs a new instance of the com.yalantis.ucrop.view.widget.HorizontalProgressWheelView$ScrollingListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onScrollStart(): void;
								onScroll(param0: number, param1: number): void;
								onScrollEnd(): void;
							});
							public onScrollStart(): void;
							public onScroll(param0: number, param1: number): void;
							public onScrollEnd(): void;
						}
					}
				}
			}
		}
	}
}

