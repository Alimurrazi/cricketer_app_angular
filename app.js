var firstApp=angular.module('firstModule',['playerList','ngRoute']);


/*
firstApp.controller('firstCtrl',function($scope,$http){
     var datas=$http.get('data.json')
     .then(function(response){
     		$scope.datas=response.data;
     });

});
*/

firstApp.config(function($routeProvider){
        $routeProvider
        .when("/",{
        	templateUrl: 'main.html'
        })
        .when('/player/:dataId',{
        	templateUrl: 'playerTemplate.html',
            controller: 'playerCtrl'

        })


});


firstApp.controller('playerCtrl',function($scope,$http,$routeParams){
	         
      	     var player_data=$http.get('data.json')
             .then(function(response){
                    $scope.player_data=response.data[$routeParams.dataId-1];
                    console.log($scope.player_data);
             });

});
