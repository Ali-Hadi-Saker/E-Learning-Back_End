import { Class } from "../models/class.model.js"
import path from 'path'
import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const downloadFile = async (req, res)=>{
    try{

        const {classId, filename} = req.params

        const classDoc = await Class.findById(classId)
        if(!classDoc){
            return res.status(404).json({message:"class not found"})
        }
        console.log(classDoc.files)
        const fileInfo = classDoc.files.find(file => file.filename === filename)
        console.log(fileInfo)
        if(!fileInfo){
            return res.status(404).json({message:"file not found"})
        }

        const fileUrl = new URL(fileInfo.fileUrl);
        const filePath = path.join(__dirname,'..','..', fileUrl.pathname);
        console.log(filePath)

        if(fs.existsSync(filePath)){
            return res.download(filePath, filename, (err)=>{
                if(err){
                    return res.status(500).json({message: 'error downloading file'})
                }
            })
        }else{
            return res.status(404).json({message: "file not found"})
        }


    }catch(e){
        return res.status(500).json({message: e.message})
    }
}