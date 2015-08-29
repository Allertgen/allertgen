angular.module('app.landingPage',[])
.controller('landingPageController', 
  ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.login = function () {
    
  };

  $scope.search = function(restaurant, location){
    //perform API calls to get info that we can render on searchPage
    $location.path('/searchPage');
  };

}]);