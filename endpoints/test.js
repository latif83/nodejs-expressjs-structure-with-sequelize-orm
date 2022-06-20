const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
	res.json(`You've reached the test get endpoint`)
})

router.post('/',(req,res)=>{
	res.json(`You've reached the test post endpoint`)
})

router.put('/',(req,res)=>{
	res.json(`You've reached the test put endpoint`)
})

module.exports = router