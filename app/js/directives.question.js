'use strict';

/* Directives */


angular.module( 'reactor_question_directives', [] )



	.directive( 'reactorQuestion' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				entry: "=",
				index: "="
			},
			templateUrl: 'partials/reactorEntryQuestion.html?t=' + new Date() 
		}

	})
	
	
	.directive( 'reactorAnswer' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				answer: "=",
				index: "="
			},
			templateUrl: 'partials/reactorAnswer.html?t=' + new Date() 
		}

	})
	
	.directive( 'reactorFeedback' , function () {

		return {
			restrict: 'A',
			scope: {
				reactor: "=",
				answer: "="
			},
			templateUrl: 'partials/reactorFeedback.html?t=' + new Date() 
		}

	})