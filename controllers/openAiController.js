import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const generateImage = async (req, res) =>{
    const { size, prompt } = req.body
    
    const imageSize =
    size === 'small' ? '1024x1024' : size === 'medium' ? '1792x1024' : '1024x1792'
    
    const myPrompt = prompt
    
    try{
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt:myPrompt,
            n: 1,
            size: imageSize,
        })
        
        const imgUrl = response.data[0].url
        
        res.status(200).json({
            success:true,
            data:imgUrl
        })
    }catch(err){
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
        } else {
            console.log(err.message);
        }
        res.status(400).json({
            success: false, 
            error: err.message
        })
    }
}

export { generateImage }