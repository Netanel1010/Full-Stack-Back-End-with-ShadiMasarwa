const router = require("express").Router();
const bcrypt = require('bcrypt');//הצפנת סיסמאות

const fs = require("fs");
const path = require("path");
const fileWithPath = path.join(__dirname,"admins.json");


//--> קבלת כל המנהלים
router.get("/" , (req,res)=>{
    try {
        const data = fs.readFileSync(fileWithPath , "utf-8"); //בודק שהקובץ קיים ורק אז הוא עובר על כול הקובץ אחד אחד
        if(!data){
            return res.status(404).send("No Products in file")//אם לא קיים או רייק תחזיר שגיאה
        }
        const products = JSON.parse(data);// ממיר את כול הקובץ ל-גאווהסקריפט
        res.status(200).json(products);// ממיר בחזרה לג'ייסון
    } catch (error) {
        res.send([]);//אם יש שגיאה מחזיר מערך ריק
    }
});


//--> id מחזיר מנהל לפי 
router.get("/:id", (req,res)=>{
    const idFromParams = req.params.id;
    const data = JSON.parse(fs.readFileSync(fileWithPath , "utf-8"));//ממיר מג'יסון למערך של אובייקטים
    const index = data.findIndex(p => p.id === idFromParams);
    if (index !== -1) {
       return res .status(200) .send(data[index]);
    }
    res.status(404).send("data not found");
});

//--> יצירת מנהל חדש עם סיסמה מוצפנת
router.post("/",(req,res)=>{

    const id = req.body.id;
    const name = req.body.name;
    const username = req.body.username;
    let password = req.body.password; 

    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const indexId = data.find(a => a.id === id);
    const indexUsername = data.find(a => a.username === username);
    // אם הברקוד וגם השם משתמש זהים תחזיר שגיאה
    // ובנוסף צריך שיהיה ברקוד וגם שם וגם שם משתנש וגם סיסמה ואם אין אחד מהם תחזיר שגיאה
    if(( indexId !== undefined || indexUsername !== undefined ) ||
        id === undefined || name === undefined || username === undefined || password === undefined )
        {
        return res.status(409).send("admin exsits already or not filed as needed!!")
    }
    const products = req.body;

    //--> עכשיו מתחילים תהליך ההצפנה
    //--> genSalt-> יוצרים מחרוזת אקראית
    //--> רמת הצפנה 12
    //--> salt-> גם אם יש 2 סיסמאות שונות תצפין אותם באופן שונה
    bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {//ניקח את הסיסמה  נצפין אותה ונחזיר אותה
        products.password = hash;   // כאן כבר מוצפן
        data.push(products);        // עכשיו שומרים
        fs.writeFileSync(fileWithPath, JSON.stringify(data));
        res.status(201).json("new admin was added successfully");
        });
    });
})

//--> עדכון מנהל
router.put("/:id",(req,res)=>{
    const idFromParams = req.params.id;
    const updatedId = req.body;
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === idFromParams);
    // לא קיים  - id אם
    if(index === -1 ){    
        return res.status(404).send("admin not found!")
    } 
    updatedId.id=idFromParams;
    data[index] = updatedId;
    fs.writeFileSync(fileWithPath, JSON.stringify(data));
    res.status(200).json("admin was updated successfully");
})

//--> מחיקת מנהל
router.delete("/:id",(req,res)=>{
    const idFromParams = req.params.id;
    const data = JSON.parse(fs.readFileSync(fileWithPath,"utf-8"));
    const index = data.findIndex(p => p.id === idFromParams);
    if (index === -1) {
        res.status(404).send("admin not found!")
    }
    data.splice(index, 1);
    fs.writeFileSync(fileWithPath, JSON.stringify(data));
    res.status(201) .send("admin was deleted successfully!!!");
})


module.exports = router;