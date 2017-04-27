angular.module('MoodMusic.controllers', [])

.controller('LoginCtrl', function($ionicPlatform, $scope, $window, $ionicHistory, $state) {
  $scope.data = {};
  $scope.windowHeight = $window.innerHeight + 'px';

  $scope.login = function() {
    // Login user

    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go('dashboard');
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

    $state.go('dashboard');
  }

  $scope.go = function(path) {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go(path);
  }
})

.controller('DashboardCtrl', function($scope, Songs, Moods){

  $scope.recentSongs = Songs.all();
  $scope.recentMoods = Moods.all();

})

.controller('DashCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
