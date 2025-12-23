/*const router = require("express").Router();

let students = [];



//יצירה
router.post("/" , (req,res)=>{
    const data = req.body;
    const id = data.id;
    const find = students.filter((students)=>students.id==id);

    if(find.length!==0){
        res.status(409).send("id exist , data not send...");
        return;
    }
    students.push(data);
    res .status(201) .send("data storad...")
});

//שינוי
router.put("/:id", (req, res) => {
    const idFromParams = Number(req.params.id);
    const updatedStudent = req.body;
    const index = students.findIndex(s => s.id === idFromParams);  // למצוא את האינדקס של הסטודנט
    if (index === -1) {
        res.status(404).send("student not found");
        return;
    }
    updatedStudent.id = idFromParams;  // לשמור על אותו ID גם אם לא שלחו אותו בגוף
    students[index] = updatedStudent;  // עדכון הסטודנט במערך
    res.status(200).send("student updated successfully");
});

//מחיקה
router.delete("/:id",(req,res)=>{
    const idFromParams = Number(req.params.id);
    const index = students.findIndex(s => s.id === idFromParams);
    if (index !== -1) {
        students.splice(index, 1);
        res .status(201) .send("data deleted!!!");
    }
})

//בונוס
router.get("/", (req, res) => {

    if (!req.query.id) {
        return res.send(students);
    }

    const id = Number(req.query.id);  
    const student = students.find(student => student.id === id);
    
    if (!student) {
        return res.status(404).send("student not found");
    }
    res.send(student); 
})

//בגלל שיש שתי פעולות של קריאה והם על אותו קישור אז רק הראשון יעבוד!


module.exports = router;*/