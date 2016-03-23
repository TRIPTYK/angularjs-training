var app = angular.module("app", [
	"ngRoute",
	"restaurantControllers"
]);


app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list' , {
		templateUrl : 'partials/list.html',
		controller : 'ListController'
	}).
	when('/details/:itemId', {
		templateUrl : 'partials/details.html',
		controller : 'DetailsController'
	}).
	when('/add', {
		templateUrl : 'partials/add.html',
		controller : 'AddController'
	}).
	otherwise({
		redirectTo : '/list'
	})
}]);