import express from 'express'
import { createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain, getDomainsBySite } from '../controllers/domainController.js'

// const express = require('express')
// const { createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain } = require('../controllers/domainController')

const router = express.Router()

// GET all items
router.get('/', getAllDomains)

// GET a single item
// router.get('/domain/:id', getSingleDomain)

// POST a new item
router.post('/', createDomain)

// DELETE a single item
// router.delete('/domain/:id', deleteSingleDomain)

// UPDATE a single item
// router.patch('/domain/:id', updateSingleDomain)

router.route('/domain/:id').get(getSingleDomain).delete(deleteSingleDomain).patch(updateSingleDomain)

// GET multi items
router.get('/categroy', getDomainsBySite)

// module.exports = router
export default router