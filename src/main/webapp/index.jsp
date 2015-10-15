<!doctype html>
<html>
	<head>
		<title>Consume using AngularJS</title>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
    	<script src="js/consume.js"></script>
    	<%response.addHeader("Access-Control-Allow-Origin", "*"); %>
	</head>
	<body ng-app="mywsApp">
	<p> hi ravi </p>
		<div ng-controller="Consume">
		<input id="a" type="text" ng-model="first" value=""/>
		<input id="b" type="text" ng-model="second" value=""/>
		<input id="c" type="submit" ng-click="send()" value="Test"/>
			<p>{{result.name}} : {{result.result}}</p>
		</div>
	</body>
</html>