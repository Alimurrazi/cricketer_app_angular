'use strict';
angular.module('playerList').component('playerList',{

//templateUrl: 'phone-list/phone-list.template.html',
templateUrl: 'player-list.template.html',

      controller: function playerListController($http)
      {
             console.log("helllo");
             var self=this;
             self.why=12;
             $http.get('data.json').then(function(response){
                   self.datas=response.data;
             });

      }
});


/*
      template:
        
                '<input type="text" ng-model="sort_by_filter" id="filter_input" placeholder="write your player name">'+
                  '<ul ng-repeat="data in $ctrl.datas" style="list-style-type: none">'+
                  '<li>'+
                      '<a href="#!player/{{data.id}}"><img ng-src="{{data.img}}" class="side_img">{{data.name}}</a>'+
                  '</li>'+
                  '</ul>',
*/
