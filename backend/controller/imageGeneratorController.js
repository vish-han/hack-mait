import  { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();
const configuration = new Configuration({
    apiKey: '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'
  });
  const openai = new OpenAIApi(configuration);
export const imageGenerator = async(req,res)=>{
    try {
        const response = await openai.createImage({
            prompt: "Superman with avengers",
            n: 1,
            size: "1024x1024",
          });
          let image_url = response.data.data[0].url;
          console.log("success");
          res.status(200).json({success:true, message:image_url});
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
}
