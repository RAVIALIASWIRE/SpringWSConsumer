var myws = angular.module('mywsApp', []);
myws.controller("Consume", function ($scope, $http) {
	$scope.send = function(){
		console.log($scope.first);
		console.log($scope.second);
		var wsurl = 'http://localhost:8085/SpringWebServices/creditscore/'+$scope.first+"/"+$scope.second; 
		$http.get(wsurl).
	    success(function(data) {
	        $scope.result = data;
	    });
	};
});