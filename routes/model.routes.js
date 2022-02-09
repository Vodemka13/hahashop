const Router = require('express')
const router = new Router()
const modelController = require('../controllers/model.controller')

router.post('/models', modelController.createModel)
router.get('/models', modelController.getModels)
router.get('/models/:id', modelController.getOneModel)
router.put('/models', modelController.updateModel)
router.delete('/models/:id', modelController.deleteModel)



module.exports = router