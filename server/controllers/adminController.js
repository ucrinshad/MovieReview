
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/token.js";
import { Admin } from "../models/adminModel.js";


export const adminSignup = async (req, res, next) => {
    try {
        const { name, email, password,  profilePic } = req.body;

        if (!name || !email || !password ) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await Admin.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "mentor already exist" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new Admin({ name, email, password: hashedPassword, mobile, profilePic });
        await newUser.save();

        const token = generateToken(newUser, "admin");
        res.cookie("token", token, {
            sameSite: "None",
            secure: true,
            httpOnly: true,
        });

        res.json({ message: "admin created successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "all fields required" });
        }

        const userExist = await Admin.findOne({ email: email });

        if (!userExist) {
            return res.status(400).json({ message: "admin does not exist" });
        }

        const isPasswordMatch = bcrypt.compareSync(password, userExist.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "admin not authenticated" });
        }

        const token = generateToken(userExist, "admin");
        res.cookie("token", token, {
            sameSite: "None",
            secure: true,
            httpOnly: true,
        });

        res.json({ message: "admin login successfully" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const adminProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const userProfile = await Admin.findById(userId).select("-password");

        res.json({ message: "user login successfully", data: userProfile });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const adminLogout = async (req, res, next) => {
    try {
        res.clearCookie("token", {
            sameSite: "None",
            secure: true,
            httpOnly: true,
        });

        res.json({ message: "admin logout success" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const checkAdmin = async (req, res, next) => {
    try {
        res.json({ message: "admin autherized" });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
export const updateAdmin = async(req, res, next)=>{

    try {
        

        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        
        if(updatedAdmin){
            res.status(200).json(updatedAdmin);
        }else{
            res.status(404).json({ message: " Update not found "})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 