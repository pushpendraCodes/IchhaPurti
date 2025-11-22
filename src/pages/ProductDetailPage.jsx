import { useState } from 'react';
import { Star, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const product = {
    name: "PARKER Vector Standard Chrome Pen",
    price: 249,
    rating: 4.9,
    totalReviews: "2.3M",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&h=200&fit=crop",
    description: "Experience premium writing with the Parker Vector Standard Chrome Pen. Crafted with precision engineering and elegant design, this pen delivers smooth, consistent ink flow for effortless writing. The durable stainless steel construction ensures long-lasting performance, while the classic chrome finish adds a touch of sophistication to your everyday writing tasks.",
    ratings: [
      { stars: 5, percent: 77 },
      { stars: 4, percent: 10 },
      { stars: 3, percent: 7 },
      { stars: 2, percent: 3 },
      { stars: 1, percent: 3 },
    ]
  };

  const reviews = [
    { id: 1, name: "You", date: "10 Dec, 2024", rating: 5, text: "Excellent pen! The writing experience is incredibly smooth and the build quality is outstanding. Highly recommend for daily use." },
    { id: 2, name: "Eleanor Pena", date: "23 Jul, 2024", rating: 4, text: "Great pen with comfortable grip. The ink flows nicely and it looks very professional." },
    { id: 3, name: "Devon Lane", date: "19 Mar, 2024", rating: 5, text: "Perfect gift choice! Premium quality and elegant design. Worth every penny." },
  ];

  const StarRating = ({ rating, size = 16 }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 px-6 rounded-t-xl font-bold text-xl shadow-lg">
          Product Details
        </div>

        {/* Main Content */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-b-xl shadow-2xl border border-slate-700/50">
          {/* Product Image */}
          <div className="p-6 flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-inner w-full max-w-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 px-6">
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
              <Eye size={20} />
              View Cart
            </button>
          </div>

          {/* Product Info */}
          <div className="p-6 space-y-4">
            <h1 className="text-white text-xl font-semibold">
              Name: {product.name}
            </h1>
            <p className="text-cyan-400 text-2xl font-bold">
              Price: ₹ {product.price}
            </p>

            {/* Description */}
            <div>
              <h2 className="text-amber-400 font-semibold mb-2">Product Details:</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            {/* Ratings Section */}
            <div className="pt-4 border-t border-slate-600">
              <h2 className="text-white font-semibold mb-4">Ratings & Reviews:</h2>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
                  {product.rating} <Star size={12} className="fill-white" />
                </span>
                <span className="text-gray-400 text-sm">({product.totalReviews} Reviews)</span>
              </div>

              {/* Rating Bars */}
              <div className="space-y-2 mb-6">
                {product.ratings.map((r) => (
                  <div key={r.stars} className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400 w-12">{r.stars} star</span>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-500"
                        style={{ width: `${r.percent}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 w-10">{r.percent}%</span>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {review.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-medium">{review.name}</h4>
                            <p className="text-gray-400 text-xs">{review.date}</p>
                          </div>
                          <StarRating rating={review.rating} size={14} />
                        </div>
                        <p className="text-gray-300 text-sm mt-2">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <button className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-colors">
                  <ChevronLeft size={16} />
                </button>
                {[1, 2, '...', 6].map((page, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors text-sm font-medium
                      ${page === currentPage 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
                    onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}