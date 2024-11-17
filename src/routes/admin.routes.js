import express from 'express'
import { addProduct } from '../controllers/admin.controllers.js'
import { authAdmin } from '../middlewares/auth.middlewares'


const router =  express.Router()

router.post('/add-product', authAdmin, addProduct)


export default router;