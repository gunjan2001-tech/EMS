import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
   e.preventDefault();
   handleLogin(email,password);
   setEmail('')
   setPassword('')
   
   
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className=" border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col gap-2">
          <input
            required
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            placeholder="enter your email "
            className="border-2 rounded-full border-emerald-600 py-3 px-5  bg-transparent  outline-none placeholder:text-gray-400 text-white  "
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="enter password"
            className="border-2 rounded-full border-emerald-600 py-3 px-5  bg-transparent outline-none placeholder:text-gray-400 text-white mb-5"
          />
          <button className=" border-none border-2 rounded-full border-emerald-600 py-3 px-24  bg-emerald-600 text-white  outline-none placeholder:text-gray-400  ">
            log in{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
