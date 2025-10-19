import React, { useState } from "react";
import { Building2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "../shared/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CREATE_COMPANY } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../store/slices/companySlice";

const CreateCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.companyName.trim()) {
      toast.error("Company name is required");
      return setLoading(false);
    }

    try {
      const response = await axios.post(
        `${CREATE_COMPANY}/create-company`,
        {
          name: formData.companyName, 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, 
        }
      );

      const company = response?.data?.company;
      const companyId = company?._id;

      dispatch(setSingleCompany(company));
      toast.success("Company created successfully!");
      navigate(`/admin/companies/${companyId}`);
    } catch (err) {
      console.error("Backend error:", err?.response?.data);
      toast.error(err?.response?.data?.message || "Error creating company");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => navigate("/admin/companies")}
              className="cursor-pointer flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Create Your Company
                </h1>
                <p className="text-gray-600 mt-1">
                  Set up your company profile to start posting jobs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/admin/companies")}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Continue"}
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            You can edit this information later in your company settings
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
