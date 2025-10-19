import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../store/slices/companySlice";
import { toast } from "react-hot-toast";
import { CREATE_COMPANY } from "../utils/constant";

const useGetUserCompany = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserCompany = async () => {
      try {
        const { data } = await axios.get(`${CREATE_COMPANY}/get`, {
          withCredentials: true,
        });

        if (data.success && data.company) {
          dispatch(setSingleCompany(data.company));
        } else {
          toast.error(data.message || "Company not found.");
        }
      } catch (error) {
        toast.error("Failed to fetch company");
        console.error("Fetch User Company Error:", error);
      }
    };

    fetchUserCompany();
  }, [dispatch]);
};

export default useGetUserCompany;
