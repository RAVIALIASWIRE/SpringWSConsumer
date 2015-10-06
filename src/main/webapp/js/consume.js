var myws = angular.module('mywsApp', []);
myws.controller("Consume", function ($scope, $http) {
	$scope.send = function(){
		console.log($scope.first);
		console.log($scope.second);
		var wsurl = 'http://192.168.1.30:8080/SpringWebServices/creditscore/'+$scope.first+"/"+$scope.second; 
		$http.get(wsurl).
	    success(function(data) {
	        $scope.result = data;
	    });
	};
});