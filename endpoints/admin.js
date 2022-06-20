const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
	res.json(`You've reached the Admin get endpoint`)
})

router.post('/',(req,res)=>{
	res.json(`You've reached the Admin post endpoint`)
})

router.put('/',(req,res)=>{
	res.json(`You've reached the Admin put endpoint`)
})

module.exports = router