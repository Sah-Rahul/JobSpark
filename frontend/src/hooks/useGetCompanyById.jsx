import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../store/slices/jobSlice";
import { CREATE_COMPANY } from "../utils/constant";
import { toast } from "react-hot-toast";
import { setSingleCompany } from "../store/slices/companySlice";

const useGetCompanyById = (companyid) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const { data } = await axios.get(`${CREATE_COMPANY}/get/${companyid}`, {
          withCredentials: true,
        });

        dispatch(setSingleCompany(data.company));
      } catch (error) {
        toast.error("Failed to fetch jobs");
        console.error("Fetch Jobs Error:", error);
      }
    };

    fetchSingleCompany();
  }, [companyid,dispatch]);
};

export default useGetCompanyById;
