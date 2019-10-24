const express = require('express')
const mysql = require('mysql')
const bodyParser = require("body-parser")
const user = require('./User')


const app = express()
app.listen(4000)

app.use(bodyParser.urlencoded({extended:false}))

app.get("/api/user/:id",function(req,res){
    try{
        user.getUser(req.params.id, function(err,data){
            if(err){
                    throw err
            }
            else{
                res.send(data);
            }
        })
    }
    catch(error){
        res.status(500).send(error)
    }
})

app.post("/api/user",function(req,res){
    try{
    user.insertUser(req.body, function(err,data){
        if(err){  
            throw err
        }
        else {
            res.send(data)
        }
    })
}
catch(error){
res.status(500).send(error)
}
})

app.put("/api/user/:id",function(req,res){
    try{
        user.updateUser(req.params.id,req.body,
            function(err,data){
                if(err){
                    throw err;
                }
                else{
                    res.send(data)
                }

            })
    }
    catch(erro){
    res.status(500).send(error);

}})

app.delete("/api/user/:id", function(req,res){
    try{
        user.deleteUser(req.params.id,function(err,data){
            if(err){
                throw err
            }
            else {
                res.send(data)
            }
        })
    }
    catch(erro){
        res.status(500).send(error);}
})
