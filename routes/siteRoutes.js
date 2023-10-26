const express = require('express')
const { createSite, getSingleSite, getAllSites, deleteSingleSite, updateSingleSite } = require('../controllers/siteController')
const router = express.Router()

// GET all items
router.get('/', getAllSites)

// GET a single items
router.get('/:id', getSingleSite)

// POST a new item
router.post('/', createSite)

// DELETE a single item
router.delete('/:id', deleteSingleSite)

// UPDATE a single item
router.patch('/:id', updateSingleSite)

module.exports = router