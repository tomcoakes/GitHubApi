githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  $scope.doSearch = function() {
    $scope.searchTerm;

    var queryURL = 'https://api.github.com/users/' + $scope.searchTerm + '?client_id=' + auth['clientID']
    var searchResource = $resource(queryURL)
    console.log(queryURL)

    $scope.searchResult = searchResource.get();

  };
});
