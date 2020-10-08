(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  var re = /\s*(?:,|$)\s*/;

  $scope.check = function() {
    var food = $scope.list;
    var makeArray = food.split(re)
    var elementCount = makeArray.length;
    if (elementCount <= 3 && elementCount >= 1) {
      $scope.message = "Enjoy!";
    }
    else if (elementCount == 0){
      $scope.message = "Please Enter Data First"
    }
    else{
      $scope.message = "Too Much!"
    }
  }
}

})();
