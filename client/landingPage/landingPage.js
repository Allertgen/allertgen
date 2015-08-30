angular.module('app.landingPage',[])
.controller('landingPageController', 
  ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.search = function(restaurant, location){
    console.log(restaurant, location);

    //perform API call to get info that we can render on searchPage
    $http.get('/yelp', {
      params: {
        restaurant: restaurant,
        location: location
      }
    }).then(function(res){
      console.log('THIS IS THE RESPONSE: ', res.data);
      $scope.searchResults = res.data;
      console.log('SCOPE.SEARCHRESULTS', $scope.searchResults);
    })
    // .then(function(){
    //   //go to search page
    //   $location.path('/searchPage');
    // })
  };

}]);