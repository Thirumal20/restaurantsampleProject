/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var sampleRoutes = require('../controllers/mainCtrl');

// ************************* VENDOR DASHBOARD Dashboard start**********************************

// addemployee  routes
router.post('/postsubmitAddEmployee', sampleRoutes.postsubmitAddEmployeeCtrl);
router.get('/getempoyeeData', sampleRoutes.getempoyeeDataCtrl);
router.get('/deleteempoyeeData/:empid', sampleRoutes.deleteempoyeeDataCtrl);
router.post('/updateAddEmployee', sampleRoutes.updateAddEmployeeCtrl);
// getempCategoryData
router.get('/getempCategoryData/:empCategory', sampleRoutes.getempCategoryDataCtrl);

// postCntdatawebsite post req start
router.post('/postCntdata', sampleRoutes.postCntdataCtrl);
router.get('/getCntData', sampleRoutes.getCntDataCtrl);
// postCntdatawebsite post req end

// postaddMenuItems 
router.post('/postaddMenuItems', sampleRoutes.postaddMenuItemsCtrl);
router.get('/getaddMenuItems', sampleRoutes.getaddMenuItemsCtrl);
router.get('/deleteMenuitems/:id', sampleRoutes.deleteMenuitemsCtrl);
// 
router.post('/uodateaddMenuItems', sampleRoutes.uodateaddMenuItemsCtrl);

// getBiryanis website get category starts
router.get('/getBiryanis', sampleRoutes.getBiryanisCtrl);
router.get('/getRice', sampleRoutes.getRiceCtrl);
router.get('/getIcecreams', sampleRoutes.getIcecreamsCtrl);
router.get('/getCurry', sampleRoutes.getCurryCtrl);
// website get category end

// getItemDetailsthroughId
router.get('/getItemDetailsthroughId/:itemid', sampleRoutes.getItemDetailsthroughIdCtrl);
// postOrderDetails
router.post('/postOrderDetails', sampleRoutes.postOrderDetailsCtrl);
// getOrderDetails
router.get('/getOrderDetails', sampleRoutes.getOrderDetailsCtrl);

router.get('/getacceptedOrders', sampleRoutes.getacceptedOrdersCtrl);

router.get('/acceptOrder/:itemid', sampleRoutes.acceptOrderCtrl);





// AddItemsDataCtrl routes
// router.get('/addItemsCheck/:item_name', sampleRoutes.addItemsCheckCtrl);
// router.post('/postaddItemsData', sampleRoutes.postAddItemsDataCtrl);
// router.get('/getaddItemsData', sampleRoutes.getaddItemsDataCtrl);
// router.get('/deleteAddItems/:itemId', sampleRoutes.deleteAddItemsCtrl);
// // router.post('/updatedModalData', sampleRoutes.updatedModalDataCtrl);





// ************************* VENDOR DASHBOARD Dashboard END**********************************
module.exports = router;

