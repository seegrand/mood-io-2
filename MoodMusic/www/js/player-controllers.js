angular.module('MoodMusic.player-controllers', [])

.controller('PlayerCtrl', function($scope, $window, $cordovaMedia, $ionicLoading, BackgroundSwirler, InputRangeLowerFillUpdater) {
  $scope.windowHeight = ($window.innerHeight) + 'px';
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
    TODO: Implement based on API
    console.log('Skip Forward');
  }

  $scope.skipBackward = function() {
    TODO: Implement based on API
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
    media = $cordovaMedia.newMedia(src);

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
          template: 'Loading...'
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
    media.seekTo($scope.currentPosition * 1000);
  }

  $scope.updateMusicProgress = function() {
    if (media != null) {
      media.currentTime().then(function(position) {
        console.log("Current position: " + position);
        $scope.currentPosition = position;
        document.getElementById('progress-range').value = position;
      });


      if (media.media._duration > -1) {
          document.getElementById('progress-range').max = media.media._duration;
      }
    }
  }

  $scope.updateLikert = function() {
    console.log($scope.likertAnswers[$scope.likertPosition]);
    document.getElementById('helpfulness').innerHTML = $scope.likertAnswers[$scope.likertPosition];
  }

  ionic.Platform.ready(function() {
    BackgroundSwirler.swirlBackground();
    InputRangeLowerFillUpdater.updateLowerFill();

    $scope.playMusicFile('http://www.eclassical.com/custom/eclassical/files/BIS1447-002-flac_16.flac');

    window.setInterval(function() {
      $scope.updateMusicProgress();
    }, 1000);
  });
});
