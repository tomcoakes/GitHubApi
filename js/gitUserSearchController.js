githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  $scope.doSearch = function() {
    $scope.searchTerm;

    var queryURL = 'https://api.github.com/search/users'
    var searchResource = $resource(queryURL);
    var pageNumber = 1;
    
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      page: $scope.pageNumber,
      access_token: auth["clientToken"]
    });
  };
});
