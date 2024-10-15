import { Job } from "../models/job.model.js";

//admin
export const jobPost = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experienceLevel, position, companyId } = req.body;
        const userId = req.id;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experienceLevel || !position || !companyId) {
            return res.status(400).json({
                message: "All fields are required!",
                success: false
            });
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "Job created successfully!",
            success: true,
            job
        });
    } catch (error) {
        console.log(error);
    }
};

//student
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found!",
                success: false
            });
        }
        return res.status(200).json({
            message: "Jobs fetched successfully!",
            success: true,
            jobs
        });

    } catch (error) {
        console.log(error);
    }
};

//student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found!",
                success: false
            });
        }
        return res.status(200).json({
            message: "Job fetched successfully!",
            success: true,
            job
        });

    } catch (error) {
        console.log(error);
    }
};

//admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId });
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found!",
                success: false
            });
        }
        return res.status(200).json({
            message: "Jobs fetched successfully!",
            success: true,
            jobs
        });

    } catch (error) {
        console.log(error);

    }
};