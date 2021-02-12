var appmdl = require('../models/model');
// var AWS = require('aws-sdk');
// var awsS3 = 'config/aws.config.json';
var moment = require('moment');

var fs = require('fs');
const { start } = require('repl');

// ************************* addemployee Dashboard start **********************************
//addemployee  starts
//addemployee  post data start
exports.postsubmitAddEmployeeCtrl = function (req, res) {
    var std = req.body;
    appmdl.postsubmitAddEmployeeMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// 
//updateAddEmployeeCtrl   data start
exports.updateAddEmployeeCtrl = function (req, res) {
    var std = req.body;
    appmdl.updateAddEmployeeMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// updateAddEmployeeCtrl end

// 
//uodateaddMenuItemsCtrl   data start
exports.uodateaddMenuItemsCtrl = function (req, res) {
    var std = req.body;
    appmdl.uodateaddMenuItemsMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// uodateaddMenuItemsCtrl end


// deleteempoyeeDataCtrl start
exports.deleteempoyeeDataCtrl = function (req, res) {
    var empid = req.params.empid;
    appmdl.deleteempoyeeDataMdl(empid, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// deleteempoyeeDataCtrl end

// 

// getempCategoryDataCtrl start
exports.getempCategoryDataCtrl = function (req, res) {
    var empCategory = req.params.empCategory;
    appmdl.getempCategoryDataMdl(empCategory, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getempCategoryDataCtrl end



// deleteMenuitemsCtrl start
exports.deleteMenuitemsCtrl = function (req, res) {
    var empid = req.params.id;
    appmdl.deleteMenuitemsMdl(empid, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}

// deleteMenuitemsCtrl end


// getempoyeeDataCtrl get req start
exports.getempoyeeDataCtrl = function (req, res) {
    var std = req.body;
    appmdl.getempoyeeDataMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getempoyeeDataCtrl get req end

// postCntdataCtrl post req start
exports.postCntdataCtrl = function (req, res) {
    var std = req.body;
    appmdl.postCntdataMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// postCntdataCtrl post req end

// getCntDataCtrl get req start
exports.getCntDataCtrl = function (req, res) {
    var std= req.body;
    appmdl.getCntDataMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getCntDataCtrl get req end

// postaddMenuItemsCtrl post req start
exports.postaddMenuItemsCtrl = function (req, res) {
    var std = req.body;
    appmdl.postaddMenuItemsMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// postaddMenuItemsCtrl post req end

// getaddMenuItemsCtrl strat
exports.getaddMenuItemsCtrl = function (req, res) {
    var std = req.body;
    appmdl.getaddMenuItemsMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getaddMenuItemsCtrl end

// getBiryanisCtrl start
exports.getBiryanisCtrl = function (req, res) {
    var std = req.body;
    appmdl.getBiryanisMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getBiryanisCtrl end

// getRiceCtrl start
exports.getRiceCtrl = function (req, res) {
    var std = req.body;
    appmdl.getRiceMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getRiceCtrl end

// getRiceCtrl start
exports.getIcecreamsCtrl = function (req, res) {
    var std = req.body;
    appmdl.getIcecreamsMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getIcecreamsCtrl end

// getCurryCtrl start
exports.getCurryCtrl = function (req, res) {
    var std = req.body;
    appmdl.getCurryMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getCurryCtrl end


// getItemDetailsthroughIdCtrl start
exports.getItemDetailsthroughIdCtrl = function (req, res) {
    var itemid = req.params.itemid;
    appmdl.getItemDetailsthroughIdMdl(itemid, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getItemDetailsthroughIdCtrl end

// 

// postOrderDetailsCtrl post req start
exports.postOrderDetailsCtrl = function (req, res) {
    var std = req.body;
    appmdl.postOrderDetailsMdl(std, function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// postOrderDetailsCtrl post req end

// getOrderDetailsCtrl start
exports.getOrderDetailsCtrl = function (req, res) {
    var std = req.body;
    appmdl.getOrderDetailsMdl(std, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getOrderDetailsCtrl end


// getacceptedOrdersCtrl start
exports.getacceptedOrdersCtrl = function (req, res) {
    // var std = req.body;
    appmdl.getacceptedOrdersMdl( function (err, results) {
        if (err) {
            console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// getacceptedOrdersCtrl end


// acceptOrderCtrl start
exports.acceptOrderCtrl = function (req, res) {
    var itemid = req.params.itemid;
    appmdl.acceptOrderMdl(itemid, function (err, results) {
        if (err) {
            // console.log(err);
            res.send({ 'status': 500, 'data': results });
            return;
        }
        res.send({ 'status': 200, 'data': results });
    });
}
// acceptOrderCtrl end





// ************************* addemployee Dashboard END **********************************
