const express = require('express')
const { createShopItem, getSingleShopItem, getAllShopItems, deleteSingleShopItem, updateSingleShopItem } = require('../controllers/ShopItemController')
const router = express.Router()

// GET all items
router.get('/', getAllShopItems)

// GET a single items
router.get('/:id', getSingleShopItem)

// POST a new item
router.post('/', createShopItem)

// DELETE a single item
router.delete('/:id', deleteSingleShopItem)

// UPDATE a single item
router.put('/:id', updateSingleShopItem)

module.exports = router