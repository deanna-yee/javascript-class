'use strict';

/* Controllers */

angular.module('listApp.controllers', [])
  .controller('listController', ['$scope', function($scope) {

  	$scope.searchFilter = null;

  	$scope.playerList = 
  	[
      {
          name: "Carli Lloyd",
          rating: "92",
          flag: "USA",
          rank: "1"
      },
      {
          name: "Megan Rapinoe",
          rating: "91",
          flag: "USA",
          rank: "2"
      },
      {
          name: "Marta",
          rating: "89",
          flag: "Brazil",
          rank: "3"
      },
      {
          name: "Christine Sinclair",
          rating: "89",
          flag: "Canada",
          rank: "4"
      },
      {
          name: "Amadine Henry",
          rating: "88",
          flag: "France",
          rank: "5"
      },
      {
          name: "Ada Stolsmo Hegerberg",
          rating: "88",
          flag: "Norway",
          rank: "6"
      },
      {
          name: "Becky Sauerbrunn",
          rating: "87",
          flag: "USA",
          rank: "7"
      },
      {
          name: "Alexandra Popp",
          rating: "86",
          flag: "Germany",
          rank: "8"
      },
      {
          name: "Dzsenifer Marozsan",
          rating: "86",
          flag: "Germany",
          rank: "9"
      },
      {
          name: "Nilla Fischer",
          rating: "86",
          flag: "Sweden",
          rank: "10"
      },
      {
          name: "Alex Morgan",
          rating: "86",
          flag: "USA",
          rank: "11"
      },
      {
          name: "Tobin Heath",
          rating: "86",
          flag: "USA",
          rank: "12"
      },
      {
          name: "Julie Johnston",
          rating: "86",
          flag: "USA",
          rank: "13"
      },
      {
          name: "Cristiane",
          rating: "85",
          flag: "Brazil",
          rank: "14"
      },
      {
          name: "Rosana",
          rating: "85",
          flag: "Brazil",
          rank: "15"
      },
      {
          name: "Erin McLeod",
          rating: "85",
          flag: "Canada",
          rank: "16"
      },
      {
          name: "Sophie Schmidt",
          rating: "85",
          flag: "Canada",
          rank: "17"
      },
      {
          name: "Steph Houghton",
          rating: "85",
          flag: "England",
          rank: "18"
      },
      {
          name: "Windie Renard",
          rating: "85",
          flag: "France",
          rank: "19"
      },
      {
          name: "Caroline Seger",
          rating: "85",
          flag: "Sweden",
          rank: "20"
      }

    ];

  }]);