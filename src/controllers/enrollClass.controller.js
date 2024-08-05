import { Class } from "../models/class.model.js"
import { User } from "../models/user.model.js"

export const enrollClass = async (req, res)=>{
    try{
        const {classId} = req.params
        const userId = req.user.id

        const classDoc = await Class.findById(classId)
        console.log(classId);
        console.log(userId)
        if(!classDoc){
            return res.status(404).json({error: 'class not found'})
        }
        if(!classDoc.students.includes(userId)){
            classDoc.students.push(userId)
            await classDoc.save()

            const user = await User.findById(userId)
            console.log(userId)
            user.enrolledClasses.push(classId)
            console.log(user.enrolledClasses)
            await user.save()

            return res.status(200).json({message: "successfully enrolled"})
        }else{
            return res.status(400).json({message: 'Already enrolled'})
        }   
        
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
}