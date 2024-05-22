import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/receive/${selectedUser?._id}`,
          { withCredentials: true }
        );
        dispatch(setMessages(res?.data?.messages));
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [selectedUser?._id, setMessages]);
};

export default useGetMessages;
