angular.module('MoodMusic.controllers', [])

  .controller('IntroCtrl', function($scope, $state, $ionicHistory){
    $scope.go = (path, disableBack) => {

      $ionicHistory.nextViewOptions({
        disableBack: disableBack
      });

      $state.go(path);
    }
  })

  .controller('LoginCtrl', function($ionicPlatform, $scope, $window, $ionicHistory, $state) {
    $scope.data = {};
    $scope.windowHeight = $window.innerHeight + 'px';

		$scope.login = function() {
			// Login user

			$ionicHistory.nextViewOptions({
				disableBack: true
			});

      $state.go('tab.dash');

		};

    $scope.go = function(view) {
      $ionicHistory.nextViewOptions({
        disableBack: false
      });

			$state.go(view);
		};
	})

	.controller('SignupCtrl', function($ionicPlatform, $scope, $window, $ionicHistory, $state) {
		$scope.data = {};
		$scope.windowHeight = $window.innerHeight + 'px';

		$scope.signup = function() {
			// Register user

			$ionicHistory.nextViewOptions({
				disableBack: true
			});

			$state.go('genres-like');
		}

		$scope.go = function(path) {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});

			$state.go(path);
		}
	})

	.controller('DashCtrl', function($rootScope, $scope, Songs, Moods) {

		$scope.recentSongs = Songs.all();
		$scope.recentMoods = Moods.all();

    $scope.changeMood = function() {
      $rootScope.go('change-my-mood', false);
    }

		// $scope.playSong = function() {
		// 	$rootScope.go('play', false);
		// }

  })

	.controller('GenresCtrl', function($scope, $ionicHistory, $state, Genres) {

		var likes = [];
		var dislikes = [];

		$scope.genres = Genres.all();

    $scope.toggleDislikes = function() {
      this.isActive = !this.isActive;

      if (this.isActive) {
        dislikes.push(this.genre.name);
      } else {
        var i = likes.indexOf(this.genre.name);
        dislikes.splice(i, 1);
      }
    }

		$scope.toggleLikes = function() {
			this.isActive = !this.isActive;

			if (this.isActive) {
				likes.push(this.genre.name);
			} else {
				var i = likes.indexOf(this.genre.name);
				likes.splice(i, 1);
			}
		}

		$scope.go = function(path) {

			// TODO: Save liked / disliked genres
			$ionicHistory.nextViewOptions({
				disableBack: false
			});

			$state.go(path);
		}

	})

	.controller('SearchCtrl', function($scope, Songs) {

		$scope.songs = Songs.all();
	})

	.controller('SettingsCtrl', function($rootScope, $scope) {
		$scope.settings = {
			enableFriends: true
		};

		$scope.logout = function(){
      // TODO: Logout
			$rootScope.go('intro', true);
      console.log("Logging out.");
    }

	})

  .controller('ChangeMyMoodCtrl', function($scope, Moods) {

    var currentMood = "";

    $scope.moods = Moods.all();

    $scope.selectedMood = function(){

      currentMood = this.mood.mood;
      console.log(currentMood);
    }

  });
