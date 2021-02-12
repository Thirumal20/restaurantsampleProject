app.controller('mainCtrl', function ($http,) {
    // create a message to display in our view
    console.log("hi mainCtrl");

});

// homeCtrl
app.controller('homeCtrl', function ($http,) {
    // create a message to display in our view
    console.log("hi homeCtrl");

});

// featuresCtrl
app.controller('featuresCtrl', function ($http,) {
    // create a message to display in our view
    console.log("hi featuresCtrl");

});

// aboutCtrl
app.controller('aboutCtrl', function ($http,) {
    // create a message to display in our view
    console.log("hi aboutCtrl");
});

 // restaurantMenuCtrl
app.controller('restaurantMenuCtrl', function ($http, $scope) {

    // get biryani items start;
    $http.get('http://localhost:2024/nodeapp/getBiryanis/')
        .success(function (resdata, status) {
            console.log("BE getBiryanis get data", resdata);
            $scope.getBiryanis = resdata.data;
        })
        .error(function (data, status, headers, config) {
            if (status == 500) { }
        });
    // get biryani items end
    // get getRice items start;
    $http.get('http://localhost:2024/nodeapp/getRice/')
        .success(function (resdata, status) {
            // console.log("BE getRice get data", resdata);
            $scope.getRice = resdata.data;
        })
        .error(function (data, status, headers, config) {
            if (status == 500) { }
        });
    // get getRice items end
    // get getIcecreams items start;
    $http.get('http://localhost:2024/nodeapp/getIcecreams/')
        .success(function (resdata, status) {
            //  console.log("BE getIcecreams get data", resdata);
            $scope.getIcecreams = resdata.data;
        })
        .error(function (data, status, headers, config) {
            if (status == 500) { }
        });
    // get getIcecreams items end

    // get getCurry items start;
    $http.get('http://localhost:2024/nodeapp/getCurry/')
        .success(function (resdata, status) {
            // console.log("BE getCurry get data", resdata);
            $scope.getCurry = resdata.data;
        })
        .error(function (data, status, headers, config) {
            if (status == 500) { }
        });
    // get getCurry items end

    //   orderDetails start
    $scope.orderDetails = function (itemObj) {
        console.log(itemObj);
        $scope.bindData = itemObj;
    }
    // orderDetails end
});


// fillOrderDetailsCtrl strat;
app.controller('fillOrderDetailsCtrl', function ($http, $scope, $stateParams) {
    var itemid = $stateParams.id;
    console.log("itemid", itemid);
    // console.log("hi fillOrderDetailsCtrl");
    $http.get('http://localhost:2024/nodeapp/getItemDetailsthroughId/' + itemid)
        .success(function (resdata) {
            // Item_cost: "60"
            // item_name: "Zeera Rice"
            console.log("BE getItemDetailsthroughId get data", resdata.data);
            $scope.getItemDetailsthroughId = resdata.data;
            $scope.ItemnameFe = resdata.data[0].item_name;
            $scope.itemCostFe = resdata.data[0].Item_cost;
        })
        .error(function (data, status, headers, config) {
            if (status == 500) { }
        });

    // sentOrderDetails start
    $scope.sentOrderDetails = function (itemObj, itemname, itemcost) {
        console.log(itemObj, itemname, itemcost);
        var data = {
            "name": itemObj.name,
            "mobileno": itemObj.mobileno,
            "gmail": itemObj.gmail,
            "address": itemObj.address,
            "quantity": itemObj.quantity,
            "item_name": itemname,
            "Item_cost": itemcost
        }
        console.log("data is", data);

        $http.post('http://localhost:2024/nodeapp/postOrderDetails', data)
            .success(function (resdata, status) {
                if (resdata.status == 200) {
                    alert('sucess..');
                    $scope.a = {};
                    // $scope.refresh();
                } else {
                    alert('failed..')
                    $scope.a = {};
                    // $scope.refresh();
                }
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            });

    }
    // sentOrderDetails end
    // name	mobileno	gmail	address	item_name	Item_cost	quantity	ord_its	order_status	order_din	
});
// fillOrderDetailsCtrl end


// teamCtrl
app.controller('teamCtrl', function ($http,) {
    // create a message to display in our view
    console.log("hi teamCtrl");
});

// contactCtrl
app.controller('contactCtrl', function ($http, $scope) {
    // create a message to display in our view
    console.log("hi contactCtrl");
    $scope.submitCntData = function (obj) {

        //  contact post req start
        console.log("fe submitCntData data", obj);
        $http.post('http://localhost:2024/nodeapp/postCntdata', obj)
            .success(function (resdata, status) {
                if (resdata.status == 200) {
                    alert('sucess..');
                    $scope.obj = {};
                    // $scope.refresh();
                } else {
                    alert('failed..')
                    $scope.obj = {};
                    // $scope.refresh();
                }
            })
            .error(function (data, status, headers, config) {
                if (status == 500) { }
            });

        //contact  post end

    };

});

                        // practice code start
// // restaurantMenuCtrl start
// app.controller('restaurantMenuCtrl', function ($http,$scope) {
//     // create a message to display in our view
//     console.log("hi restaurantMenuCtrl");
//        // get refresh call start
//        $scope.refresh = function () {
//         $http.get('http://localhost:2024/nodeapp/getBiryanis')
//             .success(function (resdata, status) {
//                 console.log("BE getBiryanis get data", resdata.data);
//                 $scope.getBiryanis = resdata.data;
//                 // location.reload();
//             })
//             .error(function (data, status, headers, config) {
//                 if (status == 500) { }
//             });
//     };
//     // get refresh call end

//     // get call start
//     $scope.refresh()

//     //  get call end


// });
// // restaurantMenuCtrl end

// // fillOrderDetailsCtrl
// app.controller('fillOrderDetailsCtrl', function ($http,$stateParams) {
//     console.log("stateParams",$stateParams.id);
//     // create a message to display in our view
//     console.log("hi fillOrderDetailsCtrl");
// });

                    // practice code end












