import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'; 
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {
        const { name, email, password} = req.body
        const exist = await User.findOne({email})

        if (exist){
            return res.status(400).send({
                message: "User already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password : hashedPassword
        })
        user.save()
        res.status(200).send({
            user
        })
    }catch(e){
        res.status(500).send({
            message: e.message
        })
    }
}

export const loginUser = async (req, res)=>{
    try{
        const {email, password} = req.body

        const user = await User.findOne({email})
        if(!user){
            return res.send({
                message: "User does not exist"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({id: user._id,role: user.role},process.env.JWT_SECRET)
        return res.status(200).json({
            user, token
        })
    }catch(e){
        res.status(500).send({
            message: e.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await User.findByIdAndDelete(id);
  
      if (!deleted) {
        return res.status(404).send({
          message: "User not found",
        });
      }
  
      res.send(deleted);
    } catch (e) {
      res.status(500).send({
        message: "Something went wrong",
      });
    }
  };