angular.module('app', ['ui.router', 'app.landingPage'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  // if it's a path that's not recognized, reroute to '/'
  $urlRouterProvider.otherwise('/');

  var landingPage = {
    name: 'landingPage',
    url: '/',
    templateUrl: './landingPage/landingPage.html'
    //express turns this url into /client/landingPage/landingPage.html
  };

  var searchPage = {
    name: 'searchPage',
    url: '/searchPage',
    templateUrl: './searchPage/searchPage.html' 
  }

  var restaurantDetails = {
    name: 'restaurantDetails',
    url: '/restaurantDetails',
    templateUrl: './restaurantDetails/restaurantDetails.html'
  }

    $stateProvider
      .state(landingPage)
      .state(searchPage)
      .state(restaurantDetails);
}])