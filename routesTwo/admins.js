const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const fileWithPath = path.join(__dirname,"admin.json");

//--> קבלת כל המוצרים
router.get("/" , (req,res)=>{
    try {
        const data = fs.readFileSync(fileWithPath , "utf-8");
        if(!data){
            return res.status(404).send("No Products in file")
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






module.exports = router;