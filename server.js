const express = require("express");
const app = express();
require("dotenv").config();


const port = process.env.PORT;

app.use(express.json());

/*
//students routes
const students = require("./routes/students-routes.js")
app.use("/students", students);


//users routes
const users = require("./routes/users-routes.js");
app.use("/users", users);


//products routes
const products = require("./routes/products-routes.js");
const { get } = require("express/lib/response.js");
app.use("/products" , products);

*/

// שיעור 7
/*
const Middleware = (req, res, next) => {
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


const validateage =(req,res,next)=>{//מטפלים בלא
    const age = Number(req.body.age);
    if(age < 0 || age > 18){
        return res.status(403).send("get some life");
    }
    next();
}
app.post("/users",validateage,(req,res)=>{// מטפלים בכן
    res.status(200).send("you are in corrent age!");
    console.log("get some joint's !!");
}); 



app.listen(port , ()=>{
    console.log(`server is running on port : ${port}`);
});