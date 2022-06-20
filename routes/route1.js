const express = require('express')

const router = express.Router()

let endpoints = {
	"test" : require('../endpoints/test'),
	"admin" : require('../endpoints/admin')
}

router.use('/test',endpoints.test)

router.use('/admin',endpoints.admin)

module.exports = router