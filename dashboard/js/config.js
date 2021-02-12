function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/login");
    $ocLazyLoadProvider.config({
        debug: false
    });
    $stateProvider
       
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/Amvt/forgotpassword.html",
            data: {
                pageTitle: 'forgotpassword',
                specialClass: 'page-header-fixed'
            }
        })
        // admin dashboard start
.state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/Amvt/dashboard.html",
    data: {
        pageTitle: 'dashboard',
        specialClass: 'page-header-fixed'
    }
})
        // admin dashboard ends



        // ****************************************RESTAURANT DASHBOARD START*******************************************
      // addEmployees routing state starts
.state('addEmployees', {
    url: "/addEmployees",
    templateUrl: "views/Amvt/addEmployees.html",
    data: {
        pageTitle: 'home',
        specialClass: 'page-header-fixed'
    },
    resolve: {
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
            }]);
        },
        loadPlugin: function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                serie: true,
                files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
            },
            {
                serie: true,
                name: 'datatables',
                files: ['js/plugins/dataTables/angular-datatables.min.js']
            },
            {
                serie: true,
                name: 'datatables.buttons',
                files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
            }
            ]);
        }
    },
    
})

    // cntDetails routing state starts
    .state('contactdetails', {
        url: "/contactdetails",
        templateUrl: "views/Amvt/contactdetails.html",
        data: {
            pageTitle: 'home',
            specialClass: 'page-header-fixed'
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                }]);
            },
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    serie: true,
                    files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
                },
                {
                    serie: true,
                    name: 'datatables',
                    files: ['js/plugins/dataTables/angular-datatables.min.js']
                },
                {
                    serie: true,
                    name: 'datatables.buttons',
                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                }
                ]);
            }
        },
        
    })
    // cntDetails routing state end

    // menuItems start
    .state('menuItems', {
        url: "/menuItems",
        templateUrl: "views/Amvt/menuItems.html",
        data: {
            pageTitle: 'home',
            specialClass: 'page-header-fixed'
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                }]);
            },
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    serie: true,
                    files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
                },
                {
                    serie: true,
                    name: 'datatables',
                    files: ['js/plugins/dataTables/angular-datatables.min.js']
                },
                {
                    serie: true,
                    name: 'datatables.buttons',
                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                }
                ]);
            }
        },
        
    })
    // menuItems end

     // ordersPlaced start
     .state('ordersPlaced', {
        url: "/ordersPlaced",
        templateUrl: "views/Amvt/ordersPlaced.html",
        data: {
            pageTitle: 'home',
            specialClass: 'page-header-fixed'
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                }]);
            },
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    serie: true,
                    files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
                },
                {
                    serie: true,
                    name: 'datatables',
                    files: ['js/plugins/dataTables/angular-datatables.min.js']
                },
                {
                    serie: true,
                    name: 'datatables.buttons',
                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                }
                ]);
            }
        },
        
    })
    // ordersPlaced end

    
       // acceptedOrders start
       .state('acceptedOrders', {
        url: "/acceptedOrders",
        templateUrl: "views/Amvt/acceptedOrders.html",
        data: {
            pageTitle: 'home',
            specialClass: 'page-header-fixed'
        },
        resolve: {
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                }]);
            },
            loadPlugin: function ($ocLazyLoad) {
                return $ocLazyLoad.load([{
                    serie: true,
                    files: ['js/plugins/dataTables/datatables.min.js', 'css/plugins/dataTables/datatables.min.css']
                },
                {
                    serie: true,
                    name: 'datatables',
                    files: ['js/plugins/dataTables/angular-datatables.min.js']
                },
                {
                    serie: true,
                    name: 'datatables.buttons',
                    files: ['js/plugins/dataTables/angular-datatables.buttons.min.js']
                }
                ]);
            }
        },
        
    })
    // acceptedOrders end
    
          



               //********************************************* */ RESTAURANT DASHBOARD ENDS********************************




.state('login', {
    url: "/login",
    templateUrl: "views/Amvt/login.html",
    data: {
        pageTitle: 'login',
        specialClass: 'header-none sidebar-none footer-none green-bg  login'
    }
})


        


}
angular
    .module('adminbag')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });