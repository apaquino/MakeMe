#import "AudioPlayerManager.h"

//*AudioPlayerManager.m*
//
// AudioPlayerManager.m
// AudioPlayerManager

#import "AudioPlayerManager.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import <AVFoundation/AVFoundation.h>

NSString *const AudioPlayerEventProgress = @"playerProgress";
NSString *const AudioPlayerEventFinished = @"playerFinished";

@implementation AudioPlayerManager {

	AVAudioPlayer *_audioPlayer;

	NSTimeInterval _currentTime;
	id _progressUpdateTimer;
	int _progressUpdateInterval;
	NSDate *_prevProgressUpdateTime;
	NSURL *_audioFileURL;
}
@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();
- (void)sendProgressUpdate {
	if (_audioPlayer && _audioPlayer.playing) {
	_currentTime = _audioPlayer.currentTime;
	}

	NSString *time = [NSString stringWithFormat:@"%f", _currentTime];

	// TODO: check the currentTime playing
	if (_prevProgressUpdateTime == nil ||
		(([_prevProgressUpdateTime timeIntervalSinceNow] * -1000.0) >= _progressUpdateInterval)) { [_bridge.eventDispatcher sendDeviceEventWithName:AudioPlayerEventProgress body:@{@"currentTime":time}];

		_prevProgressUpdateTime = [NSDate date];
	}
}

- (void)stopProgressTimer {
	[_progressUpdateTimer invalidate];
}

- (void)startProgressTimer {
	_progressUpdateInterval = 250;
	_prevProgressUpdateTime = nil;
	[self stopProgressTimer];
	_progressUpdateTimer = [CADisplayLink displayLinkWithTarget:self selector:@selector(sendProgressUpdate)];
	[_progressUpdateTimer addToRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];
}
- (void)AudioPlayerDidFinishPlaying:(AVAudioPlayer *)recorder successfully:(BOOL)flag {
	NSLog(flag ? @"FINISHED OK" : @"FINISH ERROR");
	[_bridge.eventDispatcher sendDeviceEventWithName:AudioPlayerEventFinished body:@{@"finished": @TRUE }];
}

RCT_EXPORT_METHOD(play:(NSString *)path)
{
	NSError *error;

	NSString *resourcePath = [[NSBundle mainBundle] resourcePath];
	NSString *audioFilePath = [resourcePath stringByAppendingPathComponent:path];
	_audioFileURL = [NSURL fileURLWithPath:audioFilePath];
	NSLog([_audioFileURL absoluteString]);
	_audioPlayer = [[AVAudioPlayer alloc]
	initWithContentsOfURL:_audioFileURL
	error:&error];

	if (error) {
		[self stopProgressTimer];
		NSLog(@"audio playback loading error: %@", [error localizedDescription]);
		// TODO: dispatch error over the bridge
	} else {
		[ self startProgressTimer]; [_audioPlayer play];
	}
}

RCT_EXPORT_METHOD(playWithUrl:(NSURL *) url)
{
	NSError *error;
	NSData* data = [NSData dataWithContentsOfURL: url];

	_audioPlayer = [[AVAudioPlayer alloc] initWithData:data error:&error];

	if (error) {
		[self stopProgressTimer];
		NSLog(@"audio playback loading error: %@", [error localizedDescription]);
		// TODO: dispatch error over the bridge
	} else {
		[self startProgressTimer];
		[_audioPlayer play];
	}
}

RCT_EXPORT_METHOD(pause) {
	if (_audioPlayer.playing) {
		[_audioPlayer pause];
	} else {
        [_audioPlayer play];
	}
}

RCT_EXPORT_METHOD(stop) {
	if (_audioPlayer.playing) {
		[_audioPlayer stop];
	}
}

@end
