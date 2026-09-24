import Lead from "../models/Lead.js";

// POST /api/leads  — create a new lead from the landing page form
export async function createLead(req, res, next) {
  try {
        const { name, phone, email, travelMonth } = req.body;

    if (!name || !phone || !email || !travelMonth) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, email and travel month are all required.",
      });
    }

    const normalizedKey = phone.trim().replace(/\s+/g, "");

    const FAKE_EMAIL_DOMAINS = ["test.com", "example.com", "abc.com", "asdf.com"];
    const emailDomain = email.trim().toLowerCase().split("@")[1];
    if (FAKE_EMAIL_DOMAINS.includes(emailDomain)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a real email address.",
      });
    }

    const existing = await Lead.findOne({ normalizedKey });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "You've already submitted these details. Our team will be in touch shortly.",
      });
    }

    const lead = await Lead.create({ name, phone, email, travelMonth });

    return res.status(201).json({
      success: true,
      message: "Thank you! Our Maldives specialist will reach out shortly.",
      data: lead,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors)
        .map((e) => e.message)
        .join(" ");
      return res.status(400).json({ success: false, message });
    }

        if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "You've already submitted these details. Our team will be in touch shortly.",
      });
    }

    next(err);
  }
}

// GET /api/leads  — list leads (basic admin use, add auth before real use)
export async function getLeads(req, res, next) {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      Lead.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Lead.countDocuments(),
    ]);

    return res.json({
      success: true,
      data: leads,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/leads/:id  — update a lead's status
export async function updateLeadStatus(req, res, next) {
  try {
    const { status } = req.body;
    const allowed = ["new", "contacted", "converted", "closed"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status." });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!lead) {
      return res.status(404).json({ success: false, message: "Lead not found." });
    }

    return res.json({ success: true, data: lead });
  } catch (err) {
    next(err);
  }
}
