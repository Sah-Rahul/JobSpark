export const COMPANY_MESSAGES = {
  // Create
  COMPANY_REGISTER_SUCCESS: "Company registration successful.",
  COMPANY_REGISTER_FAILED: "Company registration unsuccessful.",

  // Read
  COMPANY_FETCH_SUCCESS: "Company fetched successfully.",
  COMPANY_LIST_FETCH_SUCCESS: "Companies fetched successfully.",
  COMPANY_NOT_FOUND: "Company not found.",

  // Update
  COMPANY_UPDATE_SUCCESS: "Company updated successfully.",
  COMPANY_UPDATE_FAILED: "Company update unsuccessful.",

  // Delete
  COMPANY_DELETE_SUCCESS: "Company deleted successfully.",
  COMPANY_DELETE_FAILED: "Company deletion unsuccessful.",

  // Validation / Business logic
  COMPANY_ALREADY_EXISTS: "A company with this email already exists.",
  COMPANY_UNAUTHORIZED_ACCESS: "You are not authorized to perform this action on this company.",
  COMPANY_ALREADY_REGISTERED_BY_USER: "You have already registered a company.",

  // Image / Cloudinary related
  COMPANY_LOGO_UPLOAD_SUCCESS: "Company logo uploaded successfully.",
  COMPANY_LOGO_UPLOAD_FAILED: "Company logo upload failed.",
  COMPANY_BANNER_UPLOAD_SUCCESS: "Company banner uploaded successfully.",
  COMPANY_BANNER_UPLOAD_FAILED: "Company banner upload failed.",
  COMPANY_LOGO_REMOVE_SUCCESS: "Company logo removed successfully.",
  COMPANY_BANNER_REMOVE_SUCCESS: "Company banner removed successfully.",
} as const;