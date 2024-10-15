import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, jobPost } from "../controllers/job.controller.js";
const router = express.Router();

router.post("/post", isAuthenticated, jobPost);
router.get("/get", isAuthenticated, getAllJobs);
router.get("/get/:id", isAuthenticated, getJobById)
router.get("/getadminjobs", isAuthenticated, getAdminJobs);

export default router;
