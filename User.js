const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database:"school"
})
db.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to database")
    }
});

exports.getUser = function(id, callback){
    let sql = 'SELECT * From users WHERE uid=?';
    db.query(sql,[id], function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null, data);
            
        }
    })
}
exports.insertUser = function(data, callback){
    let sql = "INSERT into users set ?";

    db.query(sql,[data], function(err, data){

        if(err){
            callback(err)
        }
        else{
            callback(null, data);
        }
    })
}

exports.updateUser = function(id,data, callback){
    let sql = "update users set ? where uid =?";
    db.query(sql,[data,id], function(err,data){
        if(err){
            callback(err);
        }
        else{
            callback(null, data)
        }
    }) 
}

exports.deleteUser = function(id,callback){
    let sql = "delete from users where uid=?"
    db.query(sql,[id], function(err,data){
        if(err){
            callback(err)
        }
        else 
        {
            callback(null,data)
        }
    })
    
}

