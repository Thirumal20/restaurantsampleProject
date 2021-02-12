var app = angular.module('restaurantApp', ["ui.router"]);

// configure our routes
app.config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider, $stateProvider
    // show home page
    // .state('home', {
    //   url: '/home',
    //   templateUrl: 'templates/home.html',
    //   controller  : 'mainController'
    // })

    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })

    // featuresCtrl
    .state('features', {
        url: '/features',
        templateUrl: 'features.html',
        controller: 'featuresCtrl'
      })

      // about
    .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })

    //   restaurantMenu
    // .state('restaurantMenu', {
    //     url: '/restaurantMenu',
    //     templateUrl: 'restaurantMenu.html',
    //     controller: 'restaurantMenuCtrl'
    //   })

    //   team
    .state('team', {
        url: '/team',
        templateUrl: 'team.html',
        controller: 'teamCtrl'
      })

    //   contact
    .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
      })
 //   fillOrderDetailsCtrl
 .state('fillOrderDetails', {
  url: '/fillOrderDetails/:id',
  templateUrl: 'fillOrderDetails.html',
  controller: 'fillOrderDetailsCtrl'
})

 //   restaurantMenu
 .state('restaurantMenu', {
  url: '/restaurantMenu',
  templateUrl: 'restaurantMenu.html',
  controller: 'restaurantMenuCtrl'
})


    



  // catch all route
  // send users to the home page
  //   $urlRouterProvider.otherwise('/home');

});
