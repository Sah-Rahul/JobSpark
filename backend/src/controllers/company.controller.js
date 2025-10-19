import cloudinary from "../config/cloudinary.config.js";
import Company from "../models/company.model.js";

export const createCompany = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("🟢 Token userId from middleware:", req.userId);
    console.log("🟢 Creating company for user:", req.userId);

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Company name is required.",
      });
    }

    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: "Company name already exists.",
      });
    }

    const company = await Company.create({
      name,
      userId: req.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Company created successfully.",
      company,
    });
  } catch (error) {
    console.error("Create Company Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User ID missing from token.",
      });
    }

    const company = await Company.findOne({ userId });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found for this user.",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.error("🔴 Get Company Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found.",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    console.error("Get Company By ID Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { name, description, website, location } = req.body;
    const file = req.file;

    const company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(404)
        .json({ success: false, message: "Company not found." });
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (website) updateData.website = website;
    if (location) updateData.location = location;

    if (file) {
      const cloudRes = await cloudinary.uploader.upload(file.path, {
        folder: "company_logos",
        use_filename: true,
        unique_filename: false,
      });

      updateData.logo = cloudRes.secure_url;
    }

    await Company.updateOne({ _id: companyId }, { $set: updateData });

    const updatedCompany = await Company.findById(companyId);

    return res.status(200).json({
      success: true,
      message: "Company updated successfully.",
      company: updatedCompany,
    });
  } catch (error) {
    console.error("Update Company Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error." });
  }
};
