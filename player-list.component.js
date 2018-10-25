'use strict';
angular.module('playerList').component('playerList',{
       
/*
    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: function PhoneDetailController() {
        this.phoneId = 12;
      }
*/

//templateURL: 'player-list.template.html',


      template:
        
        	  	  '<input type="text" ng-model="sort_by_filter" id="filter_input" placeholder="write your player name">'+
                  '<ul ng-repeat="data in $ctrl.datas" style="list-style-type: none">'+
                  '<li>'+
                  		'<a href="#!player/{{data.id}}"><img ng-src="{{data.img}}" class="side_img">{{data.name}}</a>'+
                  '</li>'+
                  '</ul>',

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