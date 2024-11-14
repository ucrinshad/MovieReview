
import bcrypt from "bcrypt"
import { generateToken } from "../utils/token.js";
import { Admin } from "../models/adminModel.js";



export const adminSignup = async(req,res,next) =>{
    try {
        const {name,email,password,profilePic}= req.body;

        if(!name ||!email ||!password ){
            return res.status(400).json({message:"all fields required"})
        }
        const userExist = await Admin.findOne({email:email})
        if(userExist){
            return res.status(400).json({message:"admin already exist"})

        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        console.log('password====', password);
        console.log('hashedPassword====', hashedPassword)


        const newUser = new Admin({name,email,password:hashedPassword,profilePic})
        await newUser.save();


        const token= generateToken(newUser,'admin')

        res.cookie('token', token);


        res.json({message:'admin created successfully'})

        
    } catch (error) {
        res.status(error.statuscode || 500).json({message:error.message || 'Internal server error'})
    }
}

export const adminLogin = async(req,res,next) =>{
    try {
        const {email,password}= req.body;

        if(!email ||!password ){
            return res.status(400).json({message:"all fields required"})
        }
        const userExist = await Admin.findOne({email:email})

        if(!userExist){
            return res.status(400).json({message:"admin does not exist"})

        }

        const isPasswordMatch = bcrypt.compareSync(password, userExist.password)

        if(!isPasswordMatch){
            return res.status(400).json({message: 'admin not authenticated'})
        }

        

        



        const token= generateToken(userExist,'admin')
        console.log('token generated====',token)

        res.cookie('token', token);


        res.json({message:'admin login successfully'})

        
    } catch (error) {
        res.status(error.statuscode || 500).json({message:error.message || 'Internal server error'})
    }
}

export const adminProfile = async(req,res,next) =>{
    try {
        const userId = req.user.id;

        const userProfile = await Admin.findById(userId).select("-password")


        res.json({message:'admin login successfully',data:userProfile})

        
    } catch (error) {
        res.status(error.statuscode || 500).json({message:error.message || 'Internal server error'})
    }
}

export const adminLogout = async(req,res,next) =>{
    try {
        res.cookie('token');

        res.json({message: "admin logout successfully", data:userProfile})


    } catch (error) {
        res.status(error.statuscode || 500).json({message:error.message || 'Internal server error'})
    }
}

export const checkAdmin = async(req,res,next) =>{
    try {
        

        res.json({message: "admin authorised"})


    } catch (error) {
        res.status(error.statuscode || 500).json({message:error.message || 'Internal server error'})
    }
}