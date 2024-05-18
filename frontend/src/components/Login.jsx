import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        user,
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      if(res.data.success){
        navigate("/")
        toast.success(res.data.message)
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center p-8 border-2 border-red-300 w-[500px] rounded-xl bg-red-300">
      <div className="heading">
        <p className="text-black flex justify-center font-bold text-[30px] ">
          Login Form
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col mt-2">
        <input
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="bg-transparent text-black outline-none placeholder-black px-2 py-1 border-b-2 border-black mt-2 "
          type="text"
          placeholder="User Name"
        />
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="bg-transparent text-black outline-none placeholder-black px-2 py-1 border-b-2 border-black mt-2 "
          type="password"
          placeholder="Password"
        />

        <button
          type="submit"
          className="rounded-md py-2 bg-red-400 mt-8 font-bold"
        >
          Login
        </button>
      </form>
      <p className="flex justify-center mt-2">
        Don't have an Account.{" "}
        <Link className="font-bold ml-1" to={"/signup"}>
          {" "}
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
