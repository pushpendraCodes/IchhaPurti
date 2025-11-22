import React, { useState } from "react";

// Example product and delivery data
const product = {
    name: "PARKER Vector Standard Chrome Pen",
    deliveredOn: "Oct 1, 2025",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=200&fit=crop", // Replace with actual image path
};

const AddReviewPage = () => {
    const [rating, setRating] = useState(4);
    const [review, setReview] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden flex justify-center items-center px-4">

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

            {/* Center Card */}
            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">

                <h2 className="text-white text-2xl font-semibold mb-4 text-center">Add Review</h2>

                {/* Product info */}
                <div className="flex justify-center items-center gap-4 mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-md object-cover border border-gray-300"
                    />
                    <div>
                        <div className="text-white font-semibold">{product.name}</div>
                        <div className="text-xs text-gray-300">Delivered on {product.deliveredOn}</div>
                    </div>
                </div>

                <hr className="border-gray-400/50 mb-6" />

                {/* Rating Stars */}
                <div className="flex justify-center items-center mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            onClick={() => setRating(star)}
                            className={`w-9 h-9 cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286
              3.967a1 1 0 00.95.69h4.178c.969 0
              1.371 1.24.588 1.81l-3.383 2.455a1 1 0
              00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54
              1.118l-3.383-2.454a1 1 0 00-1.175 0l-3.383 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0
              00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0
              00.95-.69l1.286-3.967z" />
                        </svg>
                    ))}
                </div>

                {/* Textarea */}
                <div className="text-white font-medium mb-2">Tell us more</div>
                <textarea
                    className="w-full h-32 border border-white rounded-md p-4 text-black text-base mb-6"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Share details about your experience"
                />

                <div className="flex justify-center">
                    <button
                        className="bg-[#C8AC5B] hover:bg-yellow-600 text-white font-semibold rounded-md px-12 py-3 text-lg transition"
                        type="button"
                    >
                        Submit
                    </button>
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

export default AddReviewPage;
