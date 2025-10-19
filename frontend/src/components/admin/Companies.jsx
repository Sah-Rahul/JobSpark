import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../../pages/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";

const Companies = () => {
  const navigate = useNavigate();
  useGetAllCompanies();

  const { singleCompany } = useSelector((state) => state.company);

  if (!singleCompany) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center text-gray-600 text-lg">
          No company found for this user.
        </div>
        <Footer />
      </>
    );
  }

  console.log("✅ Company Data:", singleCompany);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-10 py-6">
        <div className="flex justify-between items-center mb-6">
          <Input placeholder="Filter by name" className="w-1/3" />
          <Button
            onClick={() => navigate("/admin/create-company")}
            className="cursor-pointer bg-purple-600 hover:bg-purple-700"
          >
            New Company
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={
                      singleCompany.logo ||
                      "https://via.placeholder.com/50?text=Logo"
                    }
                    alt={singleCompany.name}
                  />
                </Avatar>
              </TableCell>
              <TableCell>{singleCompany.name}</TableCell>
              <TableCell>{singleCompany.location || "N/A"}</TableCell>
              <TableCell>
                {new Date(singleCompany.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Footer />
    </>
  );
};

export default Companies;
