import express from 'express'
import { createRecord, getAllRecords, deleteSingleRecord, updateSingleRecord, updateRecordGenre, genreFilter } from '../controllers/recordController.js'

// const express = require('express')
// const { createRecord, getSingleRecord, getAllRecords, deleteSingleRecord, updateSingleRecord } = require('../controllers/recordController')

const router = express.Router()

router.route('/').get(getAllRecords).post(createRecord)

// filter
router.get('/filter/:genre', genreFilter)

router.patch('/updateRecordGenre', updateRecordGenre)

// DELETE a single item
router.delete('/:id', deleteSingleRecord)

// UPDATE a single item
router.put('/:id', updateSingleRecord)

// module.exports = router
export default router