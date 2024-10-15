import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Soemthing is missing!",
                success: false
            });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists!",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        })

        return res.status(201).json({
            message: "User registered successfully!",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Soemthing is missing!",
                success: false
            });
        }
        let userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).json({
                message: "Incorrect credentials!",
                success: false
            });
        }
        const isMatch = await bcrypt.compare(password, userExists.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect credentials!",
                success: false
            });
        }
        if (role !== userExists.role) {
            return res.status(400).json({
                message: "Account doesn't exists with current role!",
                success: false
            });
        }

        const tokenData = {
            userId: userExists.id
        };
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        userExists = {
            _id: userExists._id,
            fullname: userExists.fullname,
            email: userExists.email,
            phoneNumber: userExists.phoneNumber,
            role: userExists.role,
            profile: userExists.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${userExists.fullname}!`,
            success: true,
            userExists
        })
    } catch (error) {
        console.log(error);
    }
};

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully!",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(',');
        }

        const userId = req.id;

        let user = await User.findByIdAndUpdate(
            userId,
            {
                fullname,
                email,
                phoneNumber,
                profile: {
                    bio,
                    skills: skillsArray
                }
            },
            { new: true }
        );


        if (!user) {
            return res.status(400).json({
                message: "User not found!",
                success: false
            });
        }

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully!",
            success: true,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
