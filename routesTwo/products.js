const router = require("express").Router();

/*
    /:id        → params → מי?
    ?x=y        → query  → לפי מה?
    JSON/טופס  → body   → מה?
*/

const fs = require("fs");
const path = require("path");
const fileWithPath = path.join(__dirname,"products.json");

//--> קבלת כל המוצרים
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

//--> id קבלת מוצר מסוים לפי 
router.get("/:id", (req,res)=>{
    const idFromParams = req.params.id;
    const data = JSON.parse(fs.readFileSync(fileWithPath , "utf-8"));//ממיר מג'יסון למערך של אובייקטים
    const index = data.findIndex(p => p.id === idFromParams);
    if (index !== -1) {
       return res .status(200) .send(data);
    }
    res.status(404).send("data not found");
});

//--> Middleware יצירת 
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

//-->(Create) יצירת מוצר חדש 
router.post("/", valiDateAdmin,(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const price = Number(req.body.id);
    const quantity = Number(req.body.id);
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === id);
    //קיים כבר id אם
    if(index !== -1){     
        return res.status(409).send("product exsits already")
    } 
    const products = req.body;
    data.push(products);
    fs.writeFileSync(fileWithPath, JSON.stringify(data));
    res.status(201).json("new product was added successfully");
});

//--> (Update) עדכון מוצר  
router.put("/:id",valiDateAdmin,(req,res)=>{
    const idFromParams = req.params.id;
    const updatedId = req.body;
    const name = req.body.name;
    const price = Number(req.body.id);
    const quantity = Number(req.body.id);
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === idFromParams);
    // לא קיים  - id אם
    if(index === -1){     
        return res.status(404).send("product not found!")
    } 
    updatedId.id=idFromParams;
    data[index] = updatedId;
    fs.writeFileSync(fileWithPath, JSON.stringify(data));
    res.status(200).json("products was updated successfully");
})
//--> (Delete) מחיקת מוצר
router.delete("/:id",valiDateAdmin,(req,res)=>{
    const idFromParams = req.params.id;
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === idFromParams);
    if (index === -1) {
        res.status(404).send("product not found!")
    }
    data.splice(index, 1);
    fs.writeFileSync(fileWithPath, JSON.stringify(data));
    res.status(201) .send("data deleted!!!");
})


module.exports = router;