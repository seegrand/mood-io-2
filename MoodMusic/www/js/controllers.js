angular.module('MoodMusic.controllers', [])

.controller('LoginCtrl', function($ionicPlatform, $scope, $window, $ionicHistory, $state) {
  $scope.data = {};
  $scope.windowHeight = $window.innerHeight + 'px';

  $scope.login = function() {
    // Login user

    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go('genres-like');

  };

  $scope.go = function(view) {
    $ionicHistory.nextViewOptions({
      disableBack: true
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

.controller('DashCtrl', function($scope, Songs, Moods) {

  $scope.recentSongs = Songs.all();
  $scope.recentMoods = Moods.all();

})

.controller('GenresCtrl', function($scope, $ionicHistory, $state, Genres){

  $scope.genres = Genres.all();

  $scope.go = function(path) {
    // Save liked / disliked genres
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go(path);
  }

})

.controller('SearchCtrl', function($scope, Songs){

  $scope.songs = Songs.all();

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
