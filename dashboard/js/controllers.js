//const { start } = require("repl");

angular.module('adminbag')

    .controller('loginCtrl', function ($http, $scope, $rootScope, $state) {
        $scope.getLoggedIn = function (obj) {
            console.log(obj);
            // alert("hitted");
            // var user_data = {
            //     "usr_name": obj.username,
            //     "password": obj.password,
            // }
            // console.log(user_data,obj);
            // if (user_data.usr_name == 'rotary' && user_data.password == 'rotary@123') {
            //     $state.go('dashboard');
            // } else 
            if (obj.username == 'amvt' && obj.password == 'amvt@123') {
                $state.go('dashboard');
            } else {

            }
        }
    })

    .controller('MainCtrl', function ($http, $scope, $state, $filter, $rootScope) {
        var club_id = localStorage.getItem("club_id");
        ////console.log(club_id);
        if (club_id == null) {
            club_id = 0;
        }
        if (club_id) {
            $rootScope.checkusr = true;
            ////console.log($rootScope.checkusr)
        } else {
            $rootScope.checkusr = false;
            ////console.log($rootScope.checkusr)
        }

        $scope.logout = function () {
            ////console.log("fdfdfsdf");
            localStorage.removeItem('club_id');
            $state.go('login')

        }
    })



    //********************************ADDEMPLOYEE REGISTRATION start******************************************
    // addEmployeesCtrl start
    .controller('addEmployeesCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        // get refresh call start
        $scope.refresh = function () {
            $http.get('http://localhost:2024/nodeapp/getempoyeeData/')
                .success(function (resdata, status) {
                    console.log("FE getempoyeeData get data", resdata.data);
                    $scope.getempoyeeData = resdata.data;
                    // location.reload();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

        };
        // get refresh call end
        //  addEmployees post req start
        $scope.submitAddEmployee = function (a) {
            console.log("fe addEmployees data", a);
            $http.post('http://localhost:2024/nodeapp/postsubmitAddEmployee', a)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.refresh();
                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.refresh();
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });
        };
        //addEmployeesCtrl  post end
        // addEmployeesCtrl  get report start
        $scope.refresh();
        // addEmployeesCtrl  get report end

        // deleteAddEmployees start;
        $scope.deleteAddEmployees = function(empid){
            console.log(empid);
            $http.get('http://localhost:2024/nodeapp/deleteempoyeeData/'+empid)
                .success(function (resdata, status) {
                    console.log("FE Home get data", resdata);
                    // $scope.getempoyeeData = resdata.data;
                    // location.reload();
                    alert("deleted successfuly")
                    $scope.refresh();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });
            
        }
        // deleteAddEmployees end

        // editAddEmployeesFe start
        $scope.editAddEmployeesFe = function(toEdit){
            // console.log("toEdit",toEdit);
            $scope.Edittm =toEdit;

        }
        // editAddEmployeesFe end

        // updatEmployeeDataMdl strat
        $scope.updatEmployeeDataMdl = function(editedObj){
            console.log("editedObj is",editedObj);
            $http.post('http://localhost:2024/nodeapp/updateAddEmployee', editedObj)
            .success(function (resdata, status) {
                if (resdata.status == 200) {
                    alert('sucess..');
                    $scope.Edittm = {};
                    $scope.refresh();
                } else {
                    alert('failed..')
                    $scope.Edittm = {};
                    $scope.refresh();
                }
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            });

        }
        // updatEmployeeDataMdl end

        // getCategories start;
        $scope.getCategories = function(empctgy){
            console.log(empctgy);
            if(empctgy=="all"){
                console.log("all is",empctgy);
                $scope.refresh();
                return;
            }
            else{
                $http.get('http://localhost:2024/nodeapp/getempCategoryData/'+empctgy)
                .success(function (resdata, status) {
                    console.log("FE getempCategoryData get data", resdata.data);
                    // $scope.getempCategoryData = resdata.data;
                     $scope.getempoyeeData = resdata.data;
                    // alert("getempCategoryData successfuly")
                    // $scope.refresh();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

            }
            
        }

        // getCategories end;


        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)
            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end
    })
    // addEmployeesCtrl end

    // contactDetailsCtrl start
    .controller('contactDetailsCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        // get refresh call start
        $scope.refresh = function () {
            $http.get('http://localhost:2024/nodeapp/getCntData/')
                .success(function (resdata, status) {
                    console.log("FE getCntData get data", resdata);
                    $scope.getCntData = resdata.data;
                    // location.reload();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

        };
        // get refresh call end

        // addEmployeesCtrl  get report start
        $scope.refresh();
        // addEmployeesCtrl  get report end


        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)
            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end
    })
    // contactDetailsCtrl start

    // menuItemsCtrl start
    .controller('menuItemsCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        // get refresh call start
        $scope.refresh = function () {
            $http.get('http://localhost:2024/nodeapp/getaddMenuItems/')
                .success(function (resdata, status) {
                    // console.log("BE getaddMenuItems get data", resdata);
                    $scope.getaddMenuItems = resdata.data;
                    // location.reload();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });
        };
        // get refresh call end

        // addMenuItems  get report start
        $scope.refresh();
        // addMenuItems  get report end

        // addMenuItems start
        $scope.addMenuItems = function (itemObj) {
            // console.log(itemObj);
            $http.post('http://localhost:2024/nodeapp/postaddMenuItems', itemObj)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.refresh();
                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.refresh();
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

        }
        // addMenuItems end

        // editMenuItemsFe start
        $scope.editMenuItemsFe = function(toedit){
            // console.log("toedit is",toedit);
            $scope.Edittm=toedit
        }
        // editMenuItemsFe end

        // updateMenuItemsDataMdl start
        $scope.updateMenuItemsDataMdl = function (editeditemObj) {
            console.log(editeditemObj);
            $http.post('http://localhost:2024/nodeapp/uodateaddMenuItems', editeditemObj)
                .success(function (resdata, status) {
                    if (resdata.status == 200) {
                        alert('sucess..');
                        $scope.a = {};
                        $scope.refresh();
                    } else {
                        alert('failed..')
                        $scope.a = {};
                        $scope.refresh();
                    }
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

        }

        // updateMenuItemsDataMdl end

          //  delete addMenuItems start;
          $scope.deleteMenuitems = function(id){
            console.log(id);
            $http.get('http://localhost:2024/nodeapp/deleteMenuitems/'+id)
                .success(function (resdata, status) {
                    console.log("FE Home get data", resdata);
                    // $scope.getempoyeeData = resdata.data;
                    // location.reload();
                    alert("deleted successfuly")
                    $scope.refresh();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });
            
        }
        //  delete addMenuItems end


        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)
            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end
    })
    // menuItemsCtrl end

    // ordersPlacedCtrl start
    .controller('ordersPlacedCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        // refresh function start
        $scope.refresh=function(){
            $http.get('http://localhost:2024/nodeapp/getOrderDetails/')
            .success(function (resdata, status) {
                // console.log("BE getOrderDetails get data", resdata);
                $scope.getOrderDetails = resdata.data;
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            });
        }
           // refresh function end

        // get req start
        $scope.refresh();
        // get req end

        // acceptOrder start
        $scope.acceptOrder = function (itemid) {
            console.log(" itemid is", itemid);
            $http.get('http://localhost:2024/nodeapp/acceptOrder/'+itemid)
                .success(function (resdata, status) {
                    console.log("BE acceptOrder get data", resdata);
                    $scope.acceptOrder = resdata.data;
                    $scope.refresh();
                })
                .error(function (data, status, headers, config) {
                    if (status == 500) { }
                });

        }
        // acceptOrder end

        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)
            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end
    })
    // ordersPlacedCtrl end

    // acceptedOrdersCtrl start
    .controller('acceptedOrdersCtrl', function ($scope, $http, $rootScope, DTOptionsBuilder) {
        // get refresh call start
        $scope.refresh = function () {

        };
        // get refresh call end
        $http.get('http://localhost:2024/nodeapp/getacceptedOrders')
            .success(function (resdata, status) {
                console.log(resdata.data);
                $scope.getacceptedOrders1 = resdata.data;
                // location.reload();
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            });

        // addMenuItems  get report start
        // $scope.refresh();
        // addMenuItems  get report end




        //dt options start
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withOption('responsive', true)
            .withDisplayLength(10)
            .withButtons([{
                extend: 'copy'
            },
            {
                extend: 'csv'
            },
            {
                extend: 'print',
                customize: function (win) {
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');
                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
            ]);
        //dt options end
    })
     // acceptedOrdersCtrl end






// ******************************************** ADDEMPLOYEE  Dashboard end *******************************************  



