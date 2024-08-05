import { Class } from "../models/class.model.js"

export const createClass = async (req, res)=>{
    try{
        const {title, instractor, description} = req.body

        const newClass = await Class.create({
            title,
            instractor,
            description
        })
        newClass.save()
        return res.status(200).send({newClass})


    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
}