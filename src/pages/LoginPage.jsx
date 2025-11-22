import React, { useState } from "react";


const Login = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex h-screen w-full">
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2">
        <img src="/bg.jpg" alt="bg" className="w-full h-full object-cover" />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-[90%] max-w-md bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-center text-xl font-bold mb-6">
            Enter Mobile Number
          </h2>

          <label className="text-sm">Mobile Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded-md mt-1 mb-4"
            placeholder="Enter mobile number"
          />

          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md">
            Get OTP
          </button>

          <p className="mt-4 text-center text-sm">
            Don’t have an account?
            <a href="/register" className="text-blue-600 font-semibold"> Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
