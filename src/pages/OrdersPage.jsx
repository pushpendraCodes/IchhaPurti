import React, { useState } from 'react';
import { Package, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 6;

  const orders = [
    { id: 1, status: 'Processing', image: '/api/placeholder/48/48', color: 'bg-slate-400' },
    { id: 2, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
    { id: 3, status: 'Returned', image: '/api/placeholder/48/48', color: 'bg-orange-400', reviewed: true },
    { id: 4, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
    { id: 5, status: 'Returned', image: '/api/placeholder/48/48', color: 'bg-orange-400', reviewed: true },
    { id: 6, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
    { id: 7, status: 'Returned', image: '/api/placeholder/48/48', color: 'bg-orange-400', reviewed: true },
    { id: 8, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
    { id: 9, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
    { id: 10, status: 'Delivered', image: '/api/placeholder/48/48', color: 'bg-teal-500', reviewed: true },
  ];
const Navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 border border-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 left-1/3 w-64 h-64 border border-blue-300/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 border border-amber-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 border-2 border-blue-400/20 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-blue-300/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stars background */}
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
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-8">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
        
              key={order.id}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                {/* Product Image */}
                <div     onClick={()=>Navigate("/orders/1")} className={`w-12 h-12 ${order.color} rounded cursor-pointer flex items-center justify-center`}>
                  <Package className="w-6 h-6 text-white" />
                </div>

                {/* Order Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm font-medium ${
                      order.status === 'Processing' ? 'text-blue-400' :
                      order.status === 'Delivered' ? 'text-teal-400' :
                      'text-orange-400'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-white text-sm">
                    PARKER Vector... Pen +2 more items
                  </p>
                  <p className="text-amber-400 font-semibold">₹ 249</p>
                  
                  {/* Star Rating */}
                  {order.reviewed && (
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                      <Link to ="/add/review/3" className="text-xs text-blue-400 ml-2 cursor-pointer hover:text-blue-300">
                        Add Review
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-8 h-8 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-8 h-8 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all">
            1
          </button>
          
          <button className="w-8 h-8 rounded-full bg-slate-700/80 hover:bg-slate-700 flex items-center justify-center text-white transition-all">
            2
          </button>
          
          <span className="text-white px-2">...</span>
          
          <button className="w-8 h-8 rounded-full bg-slate-700/80 hover:bg-slate-700 flex items-center justify-center text-white transition-all">
            6
          </button>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="w-8 h-8 rounded-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white transition-all"
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default OrdersPage;