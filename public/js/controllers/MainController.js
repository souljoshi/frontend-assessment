app.controller('MainController', function ($scope, HomeworkFactory){
	$scope.homeworks = HomeworkFactory;
});