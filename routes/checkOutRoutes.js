require('dotenv').config()
const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const PORT = process.env.PORT

const createPayment = async (req, res) =>{
    // console.log(req.body.currentCart)
    // const items = req.body.currentCart
    // const lineItems = []
    // items.forEach(item=> {
    //     lineItems.push(
    //         {
    //             price: item._id,
    //             quantity: item.quantity
    //         }
    //     )
    // })
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items: lineItems,
            success_url:`${PORT}/checkout-success/`,
            cancel_url:`${PORT}/checkout-failed`
        })
        res.json({url:session.url})
    } catch(err){
        res.status(500).json(err.message)
    }
}

// POST a purchase
router.post('/', createPayment)

module.exports = router