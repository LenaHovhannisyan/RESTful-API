angular.module('ProductCtrl', []).controller('ProductController',function ($scope, Product) {

    $scope.products = {};
    $scope.brands = {};
    $scope.categories = {};

    angular.element(document).ready(function () {

        Product.getB().then(function (value) {
            $scope.brands = value.data;
        });
        Product.getC().then(function (value) {
            $scope.categories = value.data;
        });

        Product.getP().then(function (value) {
            $scope.products = value.data;
        });



        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });


        // We can watch for our custom `fileselect` event like this
        $(document).ready( function() {

           // $('#multiselect').multiselect();

            function isSelected(listOfItems, item) {
                var resArr = listOfItems.split(",");
                if (resArr.indexOf(item.toString()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }

            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if( input.length ) {
                    input.val(log);
                } else {
                    if( log ) alert(log);
                }

            });
        });
    })

});