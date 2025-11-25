import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const Navigate = useNavigate()
  // Send OTP API call
 const handleGetOtp = async () => {
  if (!phone || phone.length < 10) {
    setError("Please enter a valid mobile number");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: phone }), // ✅ FIXED
    });

    const data = await response.json();

    if (data.success) {
      setShowOtpModal(true);
      setError("");
    } else {
      setError(data.message || "Failed to send OTP. Please try again.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
    console.error("OTP Error:", err);
  } finally {
    setLoading(false);
  }
};


  // Verify OTP API call
 const handleVerifyOtp = async () => {
  if (!otp || otp.length !== 6) {
    setError("Please enter a valid 6-digit OTP");
    return;
  }

  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/verifyLoginOtp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phone,
          otp,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Login Successful! ");
      // Save token or redirect
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.data));
      // window.location.href = "/dashboard";

      setShowOtpModal(false);
      setPhone("");
      setOtp("");
      Navigate("/")
    } else {
      setError(data.message || "Invalid OTP. Please try again.");
    }
  } catch (err) {
    setError("Verification failed. Please try again.");
    console.error("Verify Error:", err);
  } finally {
    setLoading(false);
  }
};


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

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <label className="text-sm">Mobile Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border px-3 py-2 rounded-md mt-1 mb-4"
            placeholder="Enter mobile number"
            maxLength="10"
          />

          <button
            onClick={handleGetOtp}
            disabled={loading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Get OTP"}
          </button>

          <p className="mt-4 text-center text-sm">
            Don't have an account?
            <a href="/register" className="text-blue-600 font-semibold"> Register Now</a>
          </p>
        </div>
      </div>

      {/* OTP MODAL */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] max-w-md shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Verify OTP</h3>
              <button
                onClick={() => {
                  setShowOtpModal(false);
                  setOtp("");
                  setError("");
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {error}
              </div>
            )}

            <p className="text-sm text-gray-600 mb-4">
              Enter the 6-digit OTP sent to {phone}
            </p>

            <label className="text-sm">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border px-3 py-2 rounded-md mt-1 mb-4"
              placeholder="Enter 6-digit OTP"
              maxLength="6"
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={handleGetOtp}
              disabled={loading}
              className="w-full mt-3 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Resend OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;