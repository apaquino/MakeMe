/*
 * This module is a thin layer over the native module.
 * It's aim is to obscure implementation details for registering callbacks, changing settings, etc.
 */

import React from 'react-native';
import { AudioPlayerManager } from 'NativeModules';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export const AudioPlayer = {
	play(path) {
		AudioPlayerManager.playWithUrl(path);
	},
	pause() {
		AudioPlayerManager.pause();
	},
	stop() {
		AudioPlayerManager.stop();
		if (this.subscription) {
			this.subscription.remove();
		}
	}
};
