angular.module('ShopCtrl', []).controller('ShopController', function ($scope, Shop) {

    $scope.products = {};
    angular.element(document).ready(function () {
        console.log(Shop.get());
        Shop.get().then(function (value) {
            $scope.products = value.data;
            console.log(value.data);
        });
    });

});