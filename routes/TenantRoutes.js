const express = require('express');
const router = express.Router();

const { TenantController } = require('../controllers');
const { TenantValidator } = require('../validators')
const { verifyToken } = require('../middlewares/VerifyToken')

router.get('/tenants/:id', verifyToken,  TenantController.findAll)
router.get('/tenant/:id', verifyToken, TenantController.findOne)
router.post('/tenant/:id', verifyToken, TenantValidator.create, TenantController.create)
router.patch('/tenant/:id/:id2', verifyToken, TenantValidator.change, TenantController.change)
router.delete('/tenant/:id/:id2', verifyToken, TenantController.delete)

module.exports = router;