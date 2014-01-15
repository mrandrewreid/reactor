'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('reactor.services', []).
  value('version', '0.1');
  
  
var myModule = angular.module( 'myModule' , [] ) ;
    myModule.factory( 'serviceId' , function() {
	    var shinyNewServiceInstance ;
    	//factory function body that constructs shinyNewServiceInstance
    	return shinyNewServiceInstance ;
		
    });