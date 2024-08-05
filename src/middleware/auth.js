import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

export const authMiddleware = (req, res, next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if(!token){
        return res.status(401).json({error: 'unauthorized'})
    }
    try{

        jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err) return res.sendStatus(403)
            req.user = user
            next()
        })
        
    }catch(e){
        return res.status(401).json({error: 'invalid token'})
    }
}