import { Class } from "../models/class.model.js"

export const createClass = async (req, res)=>{
    try{
        const {title, instructor, description} = req.body

        const newClass = await Class.create({
            title,
            instructor,
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

export const deleteClass = async (req, res)=>{
    try{
        const {id} = req.param
        const deleted = Class.findByIdAndDelete(id)
        if(!deleted){
            return res.json({message: 'class not found'})
        }
        return res.send(deleted)
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
}

export const getAllClasses = async (req, res)=>{
    try{
        const classes = await Class.find()
        return res.status(200).json(classes)
    }catch(e){
        return res.status(500).send({message: e.message})
    }
}