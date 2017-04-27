angular.module('MoodMusic.auth-services', [])

.service('LoginService', function($rootScope) {
  this.loginUser = function(username, password) {
    var req = {
        method: 'POST',
        url: $rootScope.BASE_URL + 'login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username: username,
          password: password
        }
      };

      promise = $http(req);

      return promise;
  }

  this.logoutUser = function() {
      var req = {
        withCredentials: true,
        method: 'GET',
        url: $rootScope.BASE_URL + 'logout',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      promise = $http(req);

      return promise;
    }
})

.service('RegisterService', function($rootScope, $http) {
    this.registerUser = function(firstname, lastname, username, email, password) {
      var req = {
        method: 'POST',
        url: $rootScope.BASE_URL + 'register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: password
        }
      };

      promise = $http(req);

      return promise;
    }
  });
