

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require("../database-mysql");
// var Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
const selectid=function(req, res) {
  var params = req.params.id
  var sel = "SELECT * FROM Users WHERE id_User=?"
  db.query(sel,[params], (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}
const selectidTeacher=function(req, res) {
  var params = req.params.id
  var sel = "SELECT * FROM Teacher WHERE id_Teacher=?"
  db.query(sel,[params], (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}
var selectAll = function (req, res) {
  db.query("SELECT * FROM users", (err, items) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAllTeacher = function (req, res) {
  db.query("SELECT * FROM Teacher", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAJE1 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='منشط روضة اطفال 1' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectAJE2 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='منشط روضة اطفال 2' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectEPPE = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='مربي طفولة اولى و مبكرة 1' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectEPPE2 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='مربي طفولة اولى و مبكرة 2' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectTSIG1 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='تقني مساندة في اعلامبة التصرف 1' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectTSIG2 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='تقني مساندة في اعلامبة التصرف 2' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var AddUser = function (req, res) {
    var insert = "INSERT INTO Users SET ?"
    var params = {

        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        card_id: req.body.card_id,
        etude_level: req.body.etude_level,
        place: req.body.place,
        leveleducation:req.body.leveleducation,
        image_user: req.body.image_user
    }
    db.query(insert, params,(err,result) => {
        if(result) {
          res.send(result)
        }else{
          window.alert(err.message)
        }
    })
}
const Payment = function (req, res) {
  var insert = "INSERT INTO Payment SET ?"
  var params = {
    student: req.body.student,
    dbt: req.body.dbt,
    price: req.body.price,
    numero_payment: req.body.numero_payment,
    id_User: req.body.id_User,
    month: req.body.month,
  }
  db.query(insert, params,(err, result)=>{
    if(err) {
      console.log(err)
    }else{
      console.log(result)
    }
  })
}
const PaymentTeacher = function (req, res) {
  var insert = "INSERT INTO PaymentTeacher SET ?"
  var params = {
    student: req.body.student,
    dbt: req.body.dbt,
    price: req.body.price,
    id_Teacher: req.body.id_Teacher,
    month: req.body.month
  }
  db.query(insert, params,(err, result)=>{
    if(err) {
      console.log(err)
    }else{
      console.log(result)
    }
  })
}

const userpay = function (req, res) {
  var selectAll = "SELECT * FROM Payment"
  db.query(selectAll, (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}
const selectArchive = function (req, res) {
  var selectAll = "SELECT * FROM Users where etude_level ='ارشيف'"
  db.query(selectAll, (err, result) => {
    if(err) {
      console.log(err)
    }else{
      res.send(result)
    }
  })
}

const selectuserpay = function (req, res) {
  var params = req.params.id
  var sql ="SELECT Payment.price,Payment.id_Payment,Payment.dbt,Payment.month,Users.last_name,numero_payment, Users.first_name FROM (Payment INNER JOIN Users ON Payment.id_User = Users.id_User) Where Payment.id_User=?"
  db.query(sql, [params], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

const selectteacherpay = function (req, res) {
  var params = req.params.id
  var sql ="SELECT PaymentTeacher.price,PaymentTeacher.dbt,PaymentTeacher.month, Teacher.first_name FROM (PaymentTeacher INNER JOIN Teacher ON PaymentTeacher.id_Teacher = Teacher.id_Teacher) Where PaymentTeacher.id_Teacher=?"
  db.query(sql, [params], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

var AddTeacher = function (req, res) {
  var insert = "INSERT INTO Teacher SET ?"
  var params = {

      first_name: req.body.first_name,
      last_name: req.body.last_name,
      birthday: req.body.birthday,
      card_id: req.body.card_id,
      Etude: req.body.Etude,
      place: req.body.place,
      Payment:req.body.Payment,
      phone_number:req.body.phone_number,
      image_user: req.body.image_user
  }
  db.query(insert, params,(err,result) => {
      if(err) {
          console.log(err)
      }else{
          res.send(result)
      }
  })
}
const updateAje1 =(req,res)=>{
  var update = "UPDATE Users set etude_level ='منشط روضة اطفال 2' where etude_level ='منشط روضة اطفال 1'"
  db.query(update,(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  }) 
}
const archive =(req,res)=>{
  var params = req.params.id
  var update = "UPDATE Users set etude_level ='ارشيف' where id_User = ?"
  db.query(update,[params],(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  }) 
}
const cancellarchive =(req,res)=>{
  var params = req.params.id
  var user = req.body
  var update = `UPDATE Users set etude_level ='${user.etude_level}' where id_User = ?`
  db.query(update,[params],(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}
const updateuser =(req,res)=>{
  var params = req.params.id
  var user = req.body
  var update = `UPDATE Users set first_name ='${user.first_name}',last_name ='${user.last_name}',birthday='${user.birthday}' where id_User = ?`
  db.query(update,[params],(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

const updateEPPE =(req,res)=>{
  var update = "UPDATE Users set etude_level ='مربي طفولة اولى و مبكرة 2' where etude_level ='مربي طفولة اولى و مبكرة 1'"
  db.query(update,(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  }) 
}
const updatePayment=(req,res)=>{
  var params = req.params.id
  var user = req.body
  var update = `UPDATE Payment set month ='${user.month}', price ='${user.price}' , numero_payment='${user.numero_payment}' where id_payment = ?`
  db.query(update,[params],(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}
const updateTSIG =(req,res)=>{
  var update = "UPDATE Users set etude_level ='تقني مساندة في اعلامبة التصرف 2' where etude_level ='تقني مساندة في اعلامبة التصرف 1'"
  db.query(update,(err,result)=>{
    if(result){
      res.send(result)
    }else{
      res.send(err)
    }
  }) 
}
var selectEPPEFE1 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='مربي طفولة اولى و مبكرة 1 فيفري' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectEPPEFE2 = function (req, res) {
  db.query("SELECT * FROM Users where etude_level ='مربي طفولة اولى و مبكرة 2 فيفري' ", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const selectusermonthTSIG1 = function (req, res) {
  var sql ="SELECT U.id_user, U.first_name, U.last_name, GROUP_CONCAT(P.price) as payment_user FROM Users u JOIN Payment p ON U.id_user = P.id_user  Where U.etude_level ='تقني مساندة في اعلامبة التصرف 1'GROUP BY U.id_user;"
  db.query(sql, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const selectusermonthTSIG2 = function (req, res) {
  var sql ="SELECT U.id_user, U.first_name, U.last_name, GROUP_CONCAT(P.price) as payment_user FROM Users u JOIN Payment p ON U.id_user = P.id_user  Where U.etude_level ='تقني مساندة في اعلامبة التصرف 2'GROUP BY U.id_user;"
  db.query(sql, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };
// const Addfamilles = function (req, res) {
//   var insert = "INSERT INTO familles SET ?"
//   var params = {
//     familles: req.body.familles,
//     Sous_familles: req.body.Sous_familles,
//     PointMerci: req.body.PointMerci,
//   }
//   db.query(insert, params,(err, result)=>{
//     if(err) {
//       console.log(err)
//     }else{
//       console.log(result)
//     }
//   })
// }
// const AddProduct = function (req, res) {
//   var insert = "INSERT INTO produit SET ?"
//   var params = {
//     familles: req.body.familles,
//     Sous_familles: req.body.Sous_familles,
//     id_familles: req.body.id_familles,
//     Num_serie: req.body.Num_serie,
//     PointMerci: req.body.PointMerci,
//     Prix_ht: req.body.Prix_ht,
//   }
//   db.query(insert, params,(err, result)=>{
//     if(err) {
//       console.log(err)
//     }else{
//       console.log(result)
//     }
//   })
// }
// const selectfamilles = function (req, res) {
//   var selectAll = "SELECT * FROM familles"
//   db.query(selectAll, (err, result) => {
//     if(err) {
//       console.log(err)
//     }else{
//       res.send(result)
//     }
//   })
// }
// const selectProduit = function (req, res) {
//   var selectAll = "SELECT * FROM produit"
//   db.query(selectAll, (err, result) => {
//     if(err) {
//       console.log(err)
//     }else{
//       res.send(result)
//     }
//   })
// }

// const selectidfamilles=function(req, res) {
//   var params = req.params.id
//   var sel = "SELECT * FROM familles WHERE id_familles=?"
//   db.query(sel,[params], (err, result) => {
//     if(err) {
//       console.log(err)
//     }else{
//       res.send(result)
//     }
//   })
// }

module.exports = {selectusermonthTSIG1,selectusermonthTSIG2,updateuser,updatePayment, AddUser,selectAll,selectAJE1,selectAJE2,selectEPPE,cancellarchive,Payment,userpay,selectuserpay,selectArchive,selectid,archive,AddTeacher,selectAllTeacher,selectidTeacher,PaymentTeacher,selectteacherpay,selectEPPE2,selectTSIG1,selectTSIG2,updateAje1,updateEPPE,updateTSIG,selectEPPEFE1,selectEPPEFE2};
// module.exports = {Addfamilles,selectfamilles,selectidfamilles,AddProduct,selectProduit};
