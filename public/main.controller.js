/*
app.controller('MainController', function ($scope, whateverName) {
	$scope.flashCards = whateverName;

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});
*/

app.controller('MainController', function ($scope, FlashCardsFactory){
	//$scope.flashCards = whateverName;
	FlashCardsFactory.getFlashCards().then(function(res){
		$scope.flashCards = res;
	});

    $scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});