var restaurantControllers = angular.module("restaurantControllers", ['ngAnimate']);

restaurantControllers.controller("ListController", ["$scope", "$http", "$location", function($scope, $http, $location){

	$http.get("js/data.json").success(function(data) { //attention, dans chrome, ça ne passe pas si pas sur un server local. Utiliser un autre navigateur ou couper chrome et le relancer via le terminal : open -a Google\ Chrome --args --disable-web-security
		$scope.restaurants = data;
		$scope.restaurantOrder = "name";
	});

	$scope.hide = true;
	$scope.showMore = function() {
		if (this.hide == true) {
			this.hide = false;
		} else {
			this.hide = true;
		}
	}

	$scope.pageAdd = function() {
		$location.path = '/add';
	}

}]);

restaurantControllers.controller("DetailsController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	//ajout du $routeParams parce que je vais l'utiliser pour récupérer des infos dans mon URL quand on clique sur un resto.
	$http.get("js/data.json").success(function(data) { //attention, dans chrome, ça ne passe pas si pas sur un server local. Utiliser un autre navigateur ou couper chrome et le relancer via le terminal : open -a Google\ Chrome --args --disable-web-security
		$scope.restaurants = data;
		$scope.whichItem = $routeParams.itemId;


		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.restaurants.length - 1;
		}

		if ($routeParams.itemId < $scope.restaurants.length - 1) {
			$scope.nextItem = Number($routeParams.itemId) + 1;
		} else {
			$scope.nextItem = 0;
		}
	});

}]);


restaurantControllers.controller('AddController', ['$scope', function($scope){
	
}])