import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "../shared/Navbar";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { CREATE_COMPANY } from "../../utils/constant";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import useGetCompanyById from "../../hooks/useGetCompanyById";

const CompanySetup = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useGetCompanyById(id);

  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("website", formData.website);
    payload.append("location", formData.location);
    if (formData.logo) {
      payload.append("logo", formData.logo);
    }

    try {
      const { data } = await axios.put(
        `${CREATE_COMPANY}/update/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      toast.success("Company updated successfully!");
      navigate("/admin/companies");
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Error updating company");
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (!singleCompany) return;

    setFormData({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      logo: null, // don't pre-fill file input
    });
  }, [singleCompany]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-muted-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <h2 className="text-2xl font-semibold mb-14 text-center">
          Company Setup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter company name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                placeholder="https://"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="logo">Logo</Label>
              <Input
                id="logo"
                name="logo"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          You can edit this information later in your company settings.
        </p>
      </div>
    </>
  );
};

export default CompanySetup;
