require('dotenv').config()
const express = require('express')
const Stripe = require('stripe')
const router = express.Router()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// currentCart has properties: _id, name, price, quantity, subCost
const createPayment = async (req, res) =>{
    const storeItems = req.body.map(item=>{
        return{
            price_data:{
                currency: 'usd',
                product_data:{
                    name: item.name,
                },
                unit_amount: item.price
            },
            quantity: item.quantity
        }
    })
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items: storeItems,
            success_url:`${process.env.CLIENT_URL}/checkout-success`,
            cancel_url:`${process.env.CLIENT_URL}/checkout-failed`
        })
        res.send({url:session.url})
    } catch(err){
        res.status(500).json(err.message)
    }
}

// POST a purchase
router.post('/', createPayment)

module.exports = router