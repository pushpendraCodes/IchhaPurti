import React, { useState } from "react";

const REASONS = [
  "Product damaged",
  "Wrong item delivered",
  "Missing accessories",
  "Not satisfied with quality",
  "Other"
];

const OrderReturnPage = () => {
  const [selected, setSelected] = useState(REASONS[0]);
  const [reason, setReason] = useState("");

  const handleChange = (val) => {
    setSelected(val);
    if (val !== "Other") setReason("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">

      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 border border-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 left-1/3 w-64 h-64 border border-blue-300/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 border border-amber-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 border-2 border-blue-400/20 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-blue-300/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="min-h-screen flex flex-col px-4 pt-12 items-center">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/20">
          
          {/* Dummy Order Info */}
          <h1 className="text-white text-2xl font-bold mb-1">Order #ORD658234</h1>
          <p className="text-gray-300 text-sm">Wireless Bluetooth Headphones - Black</p>
          <p className="text-gray-400 text-xs mb-6">Delivered on: 24 November 2025, 8:45 PM</p>

          <h2 className="text-white text-lg font-semibold mb-2">Return Reason</h2>
          <div className="mb-2 text-white font-medium">Choose a Reason</div>

          <div className="flex flex-col gap-2 mb-6">
            {REASONS.map((item) => (
              <label key={item} className="flex items-center gap-3 text-white cursor-pointer">
                <input
                  type="radio"
                  className="accent-[#C8AC5B] w-4 h-4"
                  value={item}
                  checked={selected === item}
                  onChange={() => handleChange(item)}
                  name="returnReason"
                />
                {item}
              </label>
            ))}
          </div>

          <textarea
            className="w-full h-32 border border-white rounded-md p-4 text-black text-base mb-6"
            placeholder="Write a Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            // disabled={selected !== "Other"}
          />

          <div className="flex justify-center">
            <button
              className="bg-[#C8AC5B] hover:bg-yellow-600 text-white font-semibold rounded-md px-12 py-3 text-lg transition disabled:opacity-60"
              type="button"
              disabled={selected === "Other" && reason.trim() === ""}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default OrderReturnPage;
