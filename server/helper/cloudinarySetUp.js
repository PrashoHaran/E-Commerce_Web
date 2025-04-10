const cloudinary = require('cloudinary').v2;
const multer = require('multer')


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,

})

const storage = multer.memoryStorage();

async function imageUploadUnit(file) {

    try{
        const result= await cloudinary.uploader.upload(file,{
            resource_type:'auto',
            timeout: 30000, 
        })

       return result
    }
    
catch(err){
    console.error('Cloudinary upload error:', err);
    throw new Error('Cloudinary upload failed');
}
}


const upload = multer({
    storage,
    limits:{fileSize:5*1024*1024}
})

module.exports = {upload,imageUploadUnit}