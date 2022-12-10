const openai = require('../config/config.js')
  


const generateImage = async (req,res) => {
    const {prompt, size} = req.body
   

    const imageSize = size === 'small' ? "256x256" : size === 'medium'? "512x512": "1024x1024"
 
    try {

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: imageSize,
          });
          image_url = response.data.data[0].url;
        
        res.status(200).json({
            success:true,
            data: image_url
        })
        
    } catch (error) {
         if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            message: "Couldnt process this pettition"
        })
    }
}


const openAiController = {
    generateImage
}
module.exports = openAiController