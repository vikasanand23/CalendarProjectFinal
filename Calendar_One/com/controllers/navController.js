(function() {
    function navFunc($scope) {
        $scope.logoImage = "images/logo_colour.png";
        $scope.navButtons = ["Home", "Calendar"];
        $scope.btnActive = "Calendar";
        $scope.updateActive = function(navButton) {
            $scope.btnActive = navButton;
            console.log($scope.btnActive);
        };
    }
    angular.module("app").controller("navController", navFunc);
}());