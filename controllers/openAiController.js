import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const generateImage = async (req, res) =>{
    const { size, prompt } = req.body
    
    const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024'
    
    const myPrompt = prompt
    
    try{
        const response = await openai.images.generate({
            model: "dall-e-2",
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