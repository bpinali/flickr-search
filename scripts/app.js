var app = angular.module('flickrSearch', []);
app.controller('flickrController', function($scope, $http) {
    $scope.results = [];
    $scope.tagSearch = function(text) {
        //console.log("I'm working here!");
        //console.log($scope.searchTag)
        var url = "https://api.flickr.com/services/rest";
        var request = {
            method: 'flickr.photos.search',
            api_key: "3abfc0179898d3ad907be5001f4b3933",
            tags: $scope.searchTag,
            format: 'json',
            nojsoncallback: 1
        };
        console.log(request);
        $http({
            method: 'GET',
            url: url,
            params: request
        }).success(function(data) {
            $scope.results = data;
            //console.log(data);
        }).error(function(error) {
            //console.error(error);
        });
    };
});
