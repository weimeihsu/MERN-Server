import express from 'express'
import { createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain, getDomainsBySite } from '../controllers/domainController.js'

// const express = require('express')
// const { createDomain, getSingleDomain, getAllDomains, deleteSingleDomain, updateSingleDomain } = require('../controllers/domainController')

const router = express.Router()

// GET all items
router.get('/', getAllDomains)

// GET a single item
router.get('/:id', getSingleDomain)

// GET multi items
router.get('/:site', getDomainsBySite)

// POST a new item
router.post('/', createDomain)

// DELETE a single item
router.delete('/:id', deleteSingleDomain)

// UPDATE a single item
router.patch('/:id', updateSingleDomain)

// module.exports = router
export default router