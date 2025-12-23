/*const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const fileWithPath = path.join(__dirname , "products.json");

const products = [];

router.get("/" , (req,res)=>{

    try {
        const data = fs.readFileSync(fileWithPath , "utf-8");
        if(!data){
            return res.send("No Products in file")
        }
        const products = JSON.parse(data);
        res.json(products);

    } catch (error) {
        res.send([]);
    }
    
});
router.post("/" , (req,res)=>{
    const newProduct = req.body;
    let data;
    if(fs.existsSync(fileWithPath)){
        data = fs.readFileSync(fileWithPath , "utf-8");
    }
    else{
        return res.status(404) .send("File Not Found!!!")
    }
    const products = JSON.parse(data);
    products.push(newProduct);
    fs.writeFileSync(fileWithPath, JSON.stringify(products));
    res.status(201).json("new product was added successfully");
});


router.delete("/:id", (req,res)=>{
    const idFromParams = Number(req.params.id);
    const data = JSON.parse(fs.readFileSync(fileWithPath , "utf-8"));
    // const products = JSON.parse(data);
    const index = data.findIndex(p => p.id === idFromParams);
    if (index !== -1) {
        data.splice(index, 1);
        fs.writeFileSync(fileWithPath, JSON.stringify(data));
       return res .status(201) .send("data deleted!!!");
    }else{
       res.status(404).send("data not found")
    }
});


module.exports = router;*/