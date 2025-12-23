const router = require("express").Router();

/*
    /:id        → params → מי?
    ?x=y        → query  → לפי מה?
    JSON/טופס  → body   → מה?
*/

const fs = require("fs");
const path = require("path");
const fileWithPath = path.join(__dirname,"products.json");

router.get("/" , (req,res)=>{
    try {
        const data = fs.readFileSync(fileWithPath , "utf-8");
        if(!data){
            return res.send("No Products in file")
        }
        const products = JSON.parse(data);
        res.status(200).json(products);
    } catch (error) {
        res.send([]);
    }
});


router.get("/:id", (req,res)=>{
    const idFromParams = req.params.id;
    const data = JSON.parse(fs.readFileSync(fileWithPath , "utf-8"));//ממיר מג'יסון למערך של אובייקטים
    const index = data.findIndex(p => p.id === idFromParams);
    if (index !== -1) {
       return res .status(200) .send(data);
    }
    res.status(404).send("data not found");
});


const valiDateAdmin = (req,res,next)=>{
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
};

router.post("/", valiDateAdmin,(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const price = Number(req.body.id);
    const quantity = Number(req.body.id);
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === id);
    if(!index){
        return res.status(409).send("product exsits already")
    } 
    const products = req.body;
    fs.writeFileSync(fileWithPath, JSON.stringify(products));
    console.log("new product was added successfully");
    res.status(201).json("new product was added successfully");

})




/*
//אם לא
const somthing =(req,res,next)=>{
    const id = req.body.id;
    const name = req.body.name;
    const price = Number(req.body.id);
    const quantity = Number(req.body.id);
    
    next();
}

//אם כן
router.post("/",somthing,(req,res)=>{
    res.status(200).send("you are in corrent age!");
})
*/



module.exports = router;