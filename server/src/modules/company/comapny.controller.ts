import asyncHandler from "../../utils/AsyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";
import { HTTP_STATUS } from "../../constant/httpRequest";
import { COMPANY_MESSAGES } from "./company.constant";
import { getParam } from "../../utils/getParams";
import * as companyService from "./company.service";
import { CompanyUploadFiles } from "../../@types/company.types";

export const registerCompany = asyncHandler(async (req, res) => {
  const userId = req.user!.userId;
  const role = req.user!.role;

  const files = req.files as CompanyUploadFiles | undefined;

  const company = await companyService.registerCompanyService(
    req.body,
    userId,
    role,
    files,
  );

  return res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        company,
        COMPANY_MESSAGES.COMPANY_REGISTER_SUCCESS,
      ),
    );
});

export const getAllCompanies = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const result = await companyService.getAllCompaniesService(page, limit);

  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        result,
        COMPANY_MESSAGES.COMPANY_LIST_FETCH_SUCCESS,
      ),
    );
});

export const getCompanyBySlug = asyncHandler(async (req, res) => {
  const slug = getParam(req.params.slug);

  const company = await companyService.getCompanyServiceBySlug(slug);

  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        company,
        COMPANY_MESSAGES.COMPANY_FETCH_SUCCESS,
      ),
    );
});

export const updateCompany = asyncHandler(async (req, res) => {
  const userId = req.user!.userId;
  const role = req.user!.role;

  const files = req.files as CompanyUploadFiles | undefined;

  const company = await companyService.updateCompanyService(
    req.body,
    userId,
    role,
    files,
  );

  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        company,
        COMPANY_MESSAGES.COMPANY_UPDATE_SUCCESS,
      ),
    );
});

export const deleteCompany = asyncHandler(async (req, res) => {
  const slug = getParam(req.params.slug);
  const userId = req.user!.userId;
  const role = req.user!.role;

  await companyService.deleteCompanyService(slug, userId, role);

  return res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        null,
        COMPANY_MESSAGES.COMPANY_DELETE_SUCCESS,
      ),
    );
});
