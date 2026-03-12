const express = require('express')
const router = express.Router()
const { submitContact, getContacts } = require('../controllers/contactController')

router.post('/', submitContact)
router.get('/', getContacts)   // view all messages (add auth middleware if needed)

module.exports = router
