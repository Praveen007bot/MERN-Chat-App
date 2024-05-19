import  { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getOtherUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/user", {
          withCredentials: true,
        });
        dispatch(setOtherUsers(res.data.users));
      } catch (error) {
        console.log(error);
      }
    };
    getOtherUsers();
  }, [dispatch]);
};

export default useGetOtherUsers;
