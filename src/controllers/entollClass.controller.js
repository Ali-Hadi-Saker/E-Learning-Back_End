export const enrollClass = (req, res)=>{
    try{
        const {classId, email} = req.body
        
    }catch(e){
        return res.status(500).send({
            message: e.message
        })
    }
}