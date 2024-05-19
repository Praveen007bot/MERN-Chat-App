import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChecked = (gender) => {
    setUser({ ...user, gender });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/register",
        user,
        {
          headers: { "content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
      setUser({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center p-8 border-2 border-red-300 w-[500px] rounded-xl bg-red-300">
      <div className="heading">
        <p className="text-black flex justify-center font-bold text-[30px] ">
          Registration Form
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col mt-2">
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="bg-transparent text-black outline-none placeholder-black px-2 py-1 border-b-2 border-black mt-2 "
          type="text"
          placeholder="Name"
        />
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
        <input
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          className="bg-transparent text-black outline-none placeholder-black px-2 py-1 border-b-2 border-black mt-2 "
          type="password"
          placeholder="Confirm Password"
        />
        <div className="gender flex space-x-8 mt-2">
          <div className="male flex space-x-2">
            <label>Male</label>
            <input
              checked={user.gender === "male"}
              onChange={() => handleChecked("male")}
              type="checkbox"
            />
          </div>
          <div className="female flex space-x-2">
            <label>Female</label>
            <input
              checked={user.gender === "female"}
              onChange={() => handleChecked("female")}
              type="checkbox"
            />
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md py-2 bg-red-400 mt-4 font-bold"
        >
          Sign up
        </button>
      </form>
      <p className="flex justify-center mt-2">
        Already have an Account.{" "}
        <Link className="font-bold ml-1" to={"/login"}>
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
