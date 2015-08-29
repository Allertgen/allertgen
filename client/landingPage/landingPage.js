angular.module('app.landingPage',[])
.controller('landingPageController', 
  ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.login = function () {
      $location.path('/searchPage');
  };
}]);