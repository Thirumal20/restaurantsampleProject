
var sqldb = require('../config/dbconnect');
var dbutil = require(appRoot + '/utils/dbutils');
var moment = require('moment');


// ************************* addemployee Dashboard start**********************************
// addemployee  START
// addemployee  post data start
exports.postsubmitAddEmployeeMdl = function (data, callback) {
  var cntxtDtls = "in postsubmitAddEmployeeMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into employeeetb (	emply_name,	emply_category,	emply_phone	,employ_email,	employ_address,		emply_its	)
  values('${data.emply_name}','${data.emply_category}','${data.emply_phone}','${data.employ_email}','${data.employ_address}','${date}') `;
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// addemployee  post data end

// 

// updateAddEmployeeMdl   data start
exports.updateAddEmployeeMdl = function (data, callback) {
  var cntxtDtls = "in updateAddEmployeeMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update employeeetb set emply_name="${data.emply_name}", emply_category="${data.emply_category}", emply_phone="${data.emply_phone}", employ_email="${data.employ_email}",
  employ_address="${data.employ_address}" where id="${data.id}"`;
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// updateAddEmployeeMdl   data end

// 
// uodateaddMenuItemsMdl   data start
exports.uodateaddMenuItemsMdl = function (data, callback) {
  var cntxtDtls = "in uodateaddMenuItemsMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update menuitemtb set Item_cost="${data.Item_cost}", item_category="${data.item_category}", item_name="${data.item_name}" where id="${data.id}"`;
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// uodateaddMenuItemsMdl   data end

// getempoyeeDataMdl get req start
exports.getempoyeeDataMdl = function (data, callback) {
  var cntxtDtls = "in getempoyeeDataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `select * from employeeetb where emply_din="0"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// deleteempoyeeDataMdl get req start
exports.deleteempoyeeDataMdl = function (empid, callback) {
  var cntxtDtls = "in deleteempoyeeDataMdl";
  // var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update  employeeetb set emply_din="1" where id ="${empid}"`
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// deleteempoyeeDataMdl get req end


// getempCategoryDataMdl get req start
exports.getempCategoryDataMdl = function (empCategory, callback) {
  var cntxtDtls = "in getempCategoryDataMdl";
  // var QRY_TO_EXEC = `select emply_category from employeeetb group by emply_category`
  // var QRY_TO_EXEC = `select * from employeeetb where  emply_category="${empCategory}"`
  var QRY_TO_EXEC = `select * from employeeetb where  emply_category="${empCategory}" && emply_din="0"`

  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getempCategoryDataMdl get req end



// deleteMenuitemsMdl get req start
exports.deleteMenuitemsMdl = function (id, callback) {
  var cntxtDtls = "in deleteMenuitemsMdl";
  // var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `update  menuitemtb set item_din="1" where id ="${id}"`
  console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// deleteMenuitemsMdl get req start



// postCntdataMdl start
exports.postCntdataMdl = function (data, callback) {
  var cntxtDtls = "in postCntdataMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into contacttb (	cnt_name,	cnt_email,	cnt_msg	,cnt_its	)
  values('${data.cnt_name}','${data.cnt_email}','${data.cnt_msg}','${date}') `;
  // var QRY_TO_EXEC =`select * from employeeetb where emply_din="0"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// postCntdataMdl end

// getCntDataMdl start
exports.getCntDataMdl = function (data, callback) {
  var cntxtDtls = "in getCntDataMdl";
  // var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `select * from contacttb where cnt_din="0"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// getCntDataMdl end

// postaddMenuItemsMdl start
exports.postaddMenuItemsMdl = function (data, callback) {
  var cntxtDtls = "in postaddMenuItemsMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into menuitemtb ( item_category,	item_name	,Item_cost,	item_its	)
  values('${data.item_category}','${data.item_name}','${data.Item_cost}','${date}') `;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// postaddMenuItemsMdl end

// getaddMenuItemsCtrl start
exports.getaddMenuItemsMdl = function (data, callback) {
  var cntxtDtls = "in getaddMenuItemsMdl";
  // var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `select * from menuitemtb where item_din="0"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};

// getaddMenuItemsCtrl end

// getBiryanisMdl start
exports.getBiryanisMdl = function (data, callback) {
  var cntxtDtls = "in getBiryanisMdl";
  // var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `select * from menuitemtb where item_category="Biryani"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getBiryanisMdl end

// getRiceMdl start
exports.getRiceMdl = function (data, callback) {
  var cntxtDtls = "in getRiceMdl";
  var QRY_TO_EXEC = `select * from menuitemtb where item_category="Rice"`
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getRiceMdl end

// getIcecreamsMdl start
exports.getIcecreamsMdl = function (data, callback) {
  var cntxtDtls = "in getIcecreamsMdl";
  var QRY_TO_EXEC = `select * from menuitemtb where item_category="Icecreams"`
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getIcecreamsMdl end

// getCurryMdl start
exports.getCurryMdl = function (data, callback) {
  var cntxtDtls = "in getCurryMdl";
  var QRY_TO_EXEC = `select * from menuitemtb where item_category="Curries"`
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getCurryMdl end


// getItemDetailsthroughIdMdl start
exports.getItemDetailsthroughIdMdl = function (itemid, callback) {
  var cntxtDtls = "in getItemDetailsthroughIdMdl";
  var QRY_TO_EXEC = `select item_name,Item_cost from menuitemtb where id ="${itemid}"`;
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getItemDetailsthroughIdMdl end



// postOrderDetailsMdl start
exports.postOrderDetailsMdl = function (data, callback) {
  var cntxtDtls = "in postOrderDetailsMdl";
  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss");
  var QRY_TO_EXEC = `insert into orderstb ( 	name,	mobileno,	gmail,address	,item_name,	Item_cost	,quantity	,ord_its	)
  values('${data.name}','${data.mobileno}','${data.gmail}','${data.address}','${data.item_name}','${data.Item_cost}','${data.quantity}','${date}') `;
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// postOrderDetailsMdl end


// getOrderDetailsMdl start
exports.getOrderDetailsMdl = function (data, callback) {
  var cntxtDtls = "in getOrderDetailsMdl";
  var QRY_TO_EXEC = `select * from orderstb where order_status="0"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getOrderDetailsMdl end

// getacceptedOrdersMdl start
exports.getacceptedOrdersMdl = function (callback) {
  var cntxtDtls = "in getacceptedOrdersMdl";
  var QRY_TO_EXEC = `select * from orderstb where order_status="1"`
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// getacceptedOrdersMdl end


// acceptOrderMdl start
exports.acceptOrderMdl = function (itemid, callback) {
  var cntxtDtls = "in acceptOrderMdl";
  var QRY_TO_EXEC = `update orderstb set order_status="1" where id ="${itemid}" `
  // console.log(QRY_TO_EXEC);
  if (callback && typeof callback == "function") {
    dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, function (err, results) {
      callback(err, results);
      return;
    });
  }
  else
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls);
};
// acceptOrderMdl end





// ************************* restaurant Dashboard end**********************************
