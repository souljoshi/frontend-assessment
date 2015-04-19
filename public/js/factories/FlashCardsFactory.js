app.factory('FlashCardsFactory', function ($http){
    return { 
        getFlashCards: function(category){
            var queryParams = {};
            if (category){
                if (category === 'All Categories'){
                    ;
                }
                else{
                    queryParams.category = category;
                }
            }
            return $http.get('/cards', {params: queryParams}).then(function(response){
                return response.data;
            });
        }
    };
});
