angular.module('MoodMusic.player-controllers', [])

	.controller('PlayerCtrl', function($scope, $window, $cordovaMedia, $ionicLoading, BackgroundSwirler, InputRangeLowerFillUpdater) {
		$scope.windowHeight = $window.innerHeight + 'px';
		$scope.playing = false;

		$scope.currentPosition = 0;

		$scope.likertPosition = 2;
		$scope.likertAnswers = ['Worsened', 'Irritating', 'Neutral', 'Slightly better', 'Improved'];

		var media = null;

		var playButtonIcon = document.getElementById('play-button-icon');

		$scope.playToggle = function() {
			if (media != null) {
				if ($scope.playing) {
					media.pause();

					$scope.pause();
				} else {
					media.play();

					$scope.play();
				}
			}
		}

		$scope.skipForward = function() {
			// TODO: Implement based on API
			console.log('Skip Forward');
		}

		$scope.skipBackward = function() {
			// TODO: Implement based on API
			console.log('Skip Backward');
		}

		$scope.play = function() {
			$scope.playing = true;
			playButtonIcon.classList.remove('ion-play');
			playButtonIcon.classList.add('ion-pause');
		}

		$scope.pause = function() {
			$scope.playing = false;
			playButtonIcon.classList.remove('ion-pause');
			playButtonIcon.classList.add('ion-play');
		}

		$scope.playMusicFile = function(src) {
			// media = $cordovaMedia.newMedia(src);
			media = new Media(src, null, null, mediaStatusCallback);

			media.play();
			$scope.play();
		}

		var mediaStatusCallback = function(status) {
			switch (status) {
				case 0:
					// MEDIA_NONE
					break;
				case 1:
					// MEDIA_STARTING
					$ionicLoading.show({
						template: '<ion-spinner></ion-spinner> Loading...'
					});

					$scope.play();
					break;
				case 2:
					// MEDIA_RUNNING
					$ionicLoading.hide();

					$scope.play();
					break;
				case 3:
					// MEDIA_PAUSED
					$scope.pause();
					break;
				case 4:
					// MEDIA_STOPPED
					$scope.pause();
					break;
			}
		}

		$scope.seekMusicFile = function() {
			if (media != null) {
				media.seekTo($scope.currentPosition * 1000);
			}
		}

		$scope.updateMusicProgress = function() {
			if (media != null) {
				// media.currentTime().then(function(position) {
				//   console.log("Current position: " + position);
				//   $scope.currentPosition = position;
				//   document.getElementById('progress-range').value = position;
				// });

				media.getCurrentPosition(
					// success callback
					function(position) {
						if (position > -1) {
							console.log('Current position: ' + position);
							$scope.currentPosition = position;
							document.getElementById('progress-range').value = position;
						}
					},
					// error callback
					function(e) {
						console.log('Error getting pos = ' + e);
					}
				);

        console.log('Track duration: ' + media.getDuration());

				if (media.getDuration() > -1) {
					document.getElementById('progress-range').max = media.getDuration();
				}
			}
		}

		$scope.updateLikert = function() {
			document.getElementById('helpfulness').innerHTML = $scope.likertAnswers[$scope.likertPosition];
		}

		ionic.Platform.ready(function() {
			BackgroundSwirler.swirlBackground();
			InputRangeLowerFillUpdater.updateLowerFill();

			$scope.playMusicFile('http://www.eclassical.com/custom/eclassical/files/BIS1447-002-flac_16.flac');
      // $scope.playMusicFile('https://upload.wikimedia.org/wikipedia/commons/1/16/Tim_Berners-Lee_-_Today_%28flac_-sample_s16_-f_ogg%29.oga');

			window.setInterval(function() {
				$scope.updateMusicProgress();
			}, 1000);
		});
	});
