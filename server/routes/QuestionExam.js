const express=require("express")
const { getPrevExamQuestion, getPrevExamQuestionById, postPrevExamQuestion, deletePrevExamQuestion, putPrevExamQuestion } = require("../controllers/QuestionExamController.js")

const router=express.Router()
router.get('/mcq',getPrevExamQuestion)
router.get('/mcq/:id',getPrevExamQuestionById)
router.post('/mcq',postPrevExamQuestion)
router.delete('/mcq/:id',deletePrevExamQuestion)
router.put('/mcq/:id',putPrevExamQuestion)
module.exports=router