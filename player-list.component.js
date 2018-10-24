'use strict';
angular.module('firstModule').component('playerList',{
      
/*
    template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
    controller: function PhoneDetailController() {
        this.phoneId = 12;
      }
*/

//templateURL: 'player_list.html',


      template:
        
        	  	  '<input type="text" ng-model="sort_by_filter" id="filter_input" placeholder="write your player name">'+
                  '<ul ng-repeat="data in $ctrl.datas" style="list-style-type: none">'+
                  '<li>'+
                  		'<a href="#!player/{{data.id}}"><img ng-src="{{data.img}}" class="side_img">{{data.name}}</a>'+
                  '</li>'+
                  '</ul>',

      controller: function playerListController($http)
      {
      	
      	/*
             var datas=$http.get('data.json')  
             .then(function(response){	
     		 this.datas=response.data;
     		 console.log(this.datas);
     		 this.why=123;
               });   
          */

/*
           this.datas=[
{"id":1,"name":"Shakib Al Hasan","url":"#!sakib","img":"sakib.jpg","content":"Shakib Al Hasan (সাকিব আল হাসান; born 24 March 1987) is a Bangladeshi international cricketer who currently captains the Bangladesh national team and T20I formats. He is well known for being one of the best all-rounders of all time by being at top of the ICC all-rounder rankings for a total of almost 10 years. His aggressive left-handed batting style in the middle order, controlled slow left-arm orthodox bowling, and athletic fielding has helped him win trophies in top leagues across the world. Considered as one of the greatest cricketers to have ever played for Bangladeshj, Shakib is acknowledged as the best all-rounder in the world with the Longest amount of time spent as the International Cricket Council no.1 ranked player in history and is still in the highest current rankings in the Test format of the game. (As Of Writing October 2018). In 2015, Shakib became the first and only cricketer in history to be ranked the No.1 all-rounder by ICC in its Player Rankings in all three formats of the game (Test, Twenty20 and One Day Internationals). On 13 January 2017, he registered the highest individual score (217) by a Bangladeshi batsman in Tests."},
{"id":2,"name":"Mahmudullah","url":"#!mahmudullah","img":"mahmudullah.jpg","content":"Mohammad Mahmudullah Riyad (Bengali: মোহাম্মদ মাহমুদুল্লাহ রিয়াদ; born 4 February 1986), commonly known as Mahmudullah, is a Bangladeshi cricketer and the current Test and T20I vice-captain. He has played First-class and List A cricket for Dhaka Division and has represented Bangladesh in all forms of the game. An all-rounder, he is a lower or middle-order batsman as well as an off spin bowler. He is the first Bangladeshi to score a World Cup hundred."},
{"id":3,"name":"Tamim Iqbal","url":"#!tamim","img":"tamim.jpg","content":"Muhammad Tamim Iqbal Khan (Bengali: তামিম ইকবাল খান; born 20 March 1989) is a Bangladeshi international cricketer and former Test captain of the Bangladeshi national team. Tamim made his One Day International debut in 2007 and played his first Test the following year. A left-handed opening batsman, he is the Bangladeshi's most successful runscorer to date. Between December 2010 and September 2011 he was vice-captain of the national side. Considered as the best ever opening batsman for Bangladesh, Tamim has set up centuries in all three formats of the game and is also the first Bangladeshi to score 10,000 international runs. On 23rd January 2018 against Zimbabwe at Sher-e-Bangla National Cricket Stadium, Dhaka, he became the first batsman for Bangladesh to reach 6,000 runs in ODIs and went past Sanath Jayasuriya's 2,514 runs at the R. Premadasa Stadium to become highest run-scorer at a single venue in ODIs. In 2011 he was named as one of Wisden Cricketers' Almanack's four Cricketers of the Year, and Wisden's Test Player of the Year, becoming just the second Bangladeshi player to be awarded the accolade. He plays first-class cricket for Chittagong Division cricket team. He is the highest individual run scorer for Bangladesh in limited over formats and only Bangladeshi cricketer to score centuries in all three formats of the game. Tamim is also Bangladesh's highest century maker in international matches with 20 centuries, combining all forms of cricket. He is currently the highest run-scorer for Bangladesh in international cricket, including Test matches, ODIs and T20 internationals. He is the second Bangladeshi cricketer to score 3,000 runs in Tests and 5,000 runs in ODIs and also the first Bangladeshi cricketer to go past 1,000 runs in T20Is. He was classified as an international elite player for the inaugural Caribbean Premier League in 2013."}
];*/

var self=this;
self.why=12;
             $http.get('data.json').then(function(response){
                   self.datas=response.data;
             });


      }
});