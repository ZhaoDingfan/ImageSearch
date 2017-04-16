var app = angular.module("searchImage", ["ngRoute", "ngAnimate"]); 

app.controller("myCtrl", function($scope) {
  $scope.image = 'img/initial.jpeg';
  $scope.hidden = false;
  $scope.myFunc = function() {
    $scope.hidden = !$scope.hidden; 
  }

  $scope.file_changed = function(element) {
    var photofile = element.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        $scope.$apply(function() {
            $scope.image = e.target.result;
        });
    };
    reader.readAsDataURL(photofile);
  };
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/home.html"
    })
    .when("/searchResult", {
        templateUrl : "html/result.html",
        controller : "resultCtrl"
    });
}]);

app.controller("resultCtrl", function($scope) {
  $scope.msg = "hello everyone";
  $scope.imgArray = new Array();

  $scope.imgArray = [
    {
      first : "img/kid1.jpg",
      second : "img/kid2.jpg"
    },
    {
      first : "img/kid3.jpg",
      second : "img/kid4.jpg"
    },
    {
      first : "img/kid5.jpeg",
      second : "img/kid6.jpg"
    }
  ];
})
