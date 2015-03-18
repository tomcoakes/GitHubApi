githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  $scope.doSearch = function() {
    $scope.searchTerm;

    var queryURL = 'https://api.github.com/search/users'
    var searchResource = $resource(queryURL)

    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: auth["clientToken"]
    });

  };
});
