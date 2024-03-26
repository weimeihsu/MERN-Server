import multer from 'multer'
import path from 'path'

const imgstorage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'uploads')
    },
    filename: (req, file, callback)=>{
        callback(null, Date.now()+path.extname(file.originalname))
    }
})

// image filer
const upload = multer({
    storage: imgstorage,
    limits:{fileSize:'1000000'},
    fileFilter:(req, file, callback)=>{
        const fileType = /jpeg|jpg|png/
        const mimeType = fileType.test(file.mimetype)
        const extname = fileType.test(path.extname(file.originalname))
        if(mimeType && extname){
            return callback(null, true)
        }
        callback('Give proper file format to upload')
    }
}).single('image')

export { upload }