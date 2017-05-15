// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('MoodMusic', [
  'ionic',
  'ngCordova',
  'MoodMusic.controllers',
  'MoodMusic.player-controllers',
  'MoodMusic.services',
  'MoodMusic.auth-services',
  'MoodMusic.util-services'
])

.run(function($ionicPlatform, $rootScope, $window, $ionicHistory, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // TODO: Add API base url for MoodMusic API
    // $rootScope.BASE_URL = ...

    $rootScope.go = function(path, enableBack) {
      $ionicHistory.nextViewOptions({
        disableBack: enableBack
      });

      $state.go(path);
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // login state
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    // register state
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })

    // First Time Login (Favourite Genres)
    .state('genres-like', {
      url: '/genres-like',
      templateUrl: 'templates/genres-like.html',
      controller: 'GenresCtrl'
    })

    // First Time Login (Disliked Genres)
    .state('genres-dislike', {
      url: '/genres-dislike',
      templateUrl: 'templates/genres-dislike.html',
      controller: 'GenresCtrl'
    })

    .state('play', {
      url: '/play',
      templateUrl: 'templates/player.html',
      controller: 'PlayerCtrl'
    })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
