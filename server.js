const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

//products
const products = require("./routesTwo/products");    //ניגשים לקובץ
app.use("/products",products);  //בוחרים מה יופיע אחרי ה-פורט  במקרה שלנו מדובר על מוצרים

//admins
const admins = require("./routesTwo/admins");
app.use("/admins",admins);


/*const valiDateAdmin = (req,res,next)=>{
    const fs = require("fs");
    const path = require("path");   
    const fileWithPath = path.join(__dirname,"admins.json");
    const admins = JSON.parse(fs.readFileSync(fileWithPath , "utf-8"));

    const username = req.query.username;
    const password = req.query.password;

    const isAdmin = admins.findIndex(p => p.username === username && p.password === password);
    if(isAdmin === -1){
        return res.status(401).send("You are not admin!");
    }
    next();
};/*

/*
//שיעור 6
/*const admins = require("./routes-2/admins");
app.use("/admins",admins);*/

/*//students routes
const students = require("./routes/students-routes.js")
app.use("/students", students);

//users routes
const users = require("./routes/users-routes.js");
app.use("/users", users);

//products routes
const products = require("./routes/products-routes.js");
const { get } = require("express/lib/response.js");
app.use("/products" , products); */

// שיעור 7
/*const Middleware = (req, res, next) => {
    console.log(`Method:${req.method},URL${req.url},Time:${new Date() .toLocaleString()}`);
    res.send(`Method:${req.method},URL${req.url},Time:${new Date() .toLocaleString()}`);
    next();
};  


app.use(Middleware);*/

/*const blockDelete = (req,res,next) =>{
    const deleted = req.method; 
    if(deleted === 'DELETE'){
        console.log("the api delete is close!!");
        return res.status(403).send("the api delete is close!!")
    }
    next();
}
app.use(blockDelete);*/

/*const validateage =(req,res,next)=>{//מטפלים בלא
    const age = Number(req.body.age);
    if(age < 0 || age > 18){
        return res.status(403).send("get some life");
    }
    next();
}
app.post("/users",validateage,(req,res)=>{// מטפלים בכן
    res.status(200).send("you are in corrent age!");
    console.log("get some joint's !!");
}); */


app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`);
});