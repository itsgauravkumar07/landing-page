import { Router } from "express";
import { createLead, getLeads, updateLeadStatus } from "../controllers/leadController.js";

const router = Router();

router.post("/", createLead);
router.get("/", getLeads);
router.patch("/:id", updateLeadStatus);

export default router;
