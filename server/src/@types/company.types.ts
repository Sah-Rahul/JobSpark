import { Document, Types } from "mongoose";
import { OrganizationType, TeamSize } from "../enum/company.enum";


export interface ICompanyImage {
  url: string;
  publicId: string;
}

export interface ICompany extends Document {
  companyName: string;

  logoImage?: ICompanyImage;
  bannerImage?: ICompanyImage;


  companyAboutUs: string;
  organizationType: OrganizationType;
  industryType: string;
  teamSize: TeamSize;

  yearOfEstablishment: number;
  companyWebsite: string;
  slug: string;

  companyVision: string;
  createdBy: Types.ObjectId;
  totalJobsPosted?: number;

  companySocialMedia: string[];
  mapLocation?: string;
  phoneNumber?: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
}

export type CompanyUploadFiles = {
  logoImage?: Express.Multer.File[];
  bannerImage?: Express.Multer.File[];
};