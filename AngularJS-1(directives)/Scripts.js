///<eference path="angular.min.js"/>
var myApp=angular
				.module("myModule", [])
				.controller("myController", function ($scope) {
					var Employee={
						name:"Harsh",
						age:45
					}
				$scope.Employee=Employee;
				});