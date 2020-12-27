(function(){

'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
   

    $scope.check = function(){
        if($scope.dishes == "" || !$scope.dishes ){
          $scope.message = "Please enter data first";
          console.log("Enter data");
        }  

        else {
            var Dishes = $scope.dishes.split (',');
            if(Dishes.length <= 3)
             $scope.message = "Enjoy";
            
            else if  (Dishes.length > 3)
             $scope.message = "Too Much";
        }

    }

}
})();