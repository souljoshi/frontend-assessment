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

app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory){
	//$scope.flashCards = whateverName;
	FlashCardsFactory.getFlashCards().then(function(res){
		$scope.flashCards = res;
	});

    $scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) 
		{
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			var scores = ScoreFactory;
			if (answer.correct)
			{
				scores.correct++;
			}
			else
			{
				scores.incorrect++;
			}
		}
	}

	$scope.categories = [
		'All Categories',
		'MongoDB',
		'Express',
		'Angular',
		'Node'
	];

	$scope.selectedCategoryIndex = 0;

	$scope.getCategoryCards = function (category, $index){
		FlashCardsFactory.getFlashCards(category).then(function(res){
		$scope.flashCards = res;

		$scope.selectedCategoryIndex = $index;
	}); 
	}
});