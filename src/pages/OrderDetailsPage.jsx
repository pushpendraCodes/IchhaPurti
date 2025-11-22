import React from 'react';
import { Package, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderDetailsPage = () => {
  const orderItems = [
    { id: 1, name: 'PARKER Vector Standard Chrome Pen', qty: 2, price: 249, color: 'bg-slate-400' },
    { id: 2, name: 'PARKER Vector Standard Chrome Pen', qty: 1, price: 249, color: 'bg-teal-500' },
    { id: 3, name: 'PARKER Vector Standard Chrome Pen', qty: 1, price: 249, color: 'bg-orange-400' },
  ];

  const timeline = [
    { status: 'Order Confirmed', detail: 'Order has been placed.', date: 'Wed, 16 Oct 2025 - 10:00 am', completed: true },
    { status: 'Shipped', detail: 'DTPL Logistics - FMPC4PQ5564', date: 'Wed, 21 Oct 2025 - 11:00 am', completed: true },
    { status: 'Out for Delivery', detail: 'Your item is out for delivery.', date: 'Wed, 23 Oct 2025 - 9:00 am', completed: true },
    { status: 'Delivered', detail: 'Your item has been delivered.', date: 'Wed, 22 Oct 2025 - 11:02 am', completed: true },
  ];

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
        <h1 className="text-3xl font-bold text-white mb-6">Order Details</h1>

        {/* Order ID */}
        <div className="mb-6">
          <p className="text-sm text-slate-300">ORDER ID: <span className="text-white font-semibold">ORD8746974</span></p>
        </div>

        {/* Order Items */}
        <div className="space-y-3 mb-8">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 flex items-center justify-between hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.color} rounded flex items-center justify-center`}>
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm">{item.name}</p>
                  <p className="text-slate-400 text-xs">Qty: {item.qty}</p>
                  <p className="text-amber-400 font-semibold">₹ {item.price}</p>
                </div>
              </div>
              <Link to ="/orders/return/2" className="px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm rounded transition-all duration-300">
                Return
              </Link>
            </div>
          ))}
        </div>

        {/* Order Timeline */}
        <div className="mb-8">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-400 to-emerald-400"></div>

            {timeline.map((step, index) => (
              <div key={index} className="relative mb-6 last:mb-0">
                {/* Dot */}
                <div className={`absolute -left-6 w-4 h-4 rounded-full border-2 ${
                  step.completed ? 'bg-emerald-400 border-emerald-400' : 'bg-slate-700 border-slate-600'
                } flex items-center justify-center`}>
                  {step.completed && <Check className="w-2.5 h-2.5 text-slate-900" />}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{step.status}</h3>
                  <p className="text-slate-300 text-xs mb-1">{step.detail}</p>
                  <p className="text-slate-500 text-xs">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 mb-4">
          <h3 className="text-white font-semibold mb-3 text-sm border-b border-slate-700/50 pb-2">Delivery Address</h3>
          <div className="text-slate-300 text-sm">
            <p className="font-semibold text-white mb-1">Tony Stark</p>
            <p>4537 Washington Ave, Manchester, Kentucky 39495</p>
            <p className="text-xs text-slate-400 mt-2">Mobile Number: +91 9876543210</p>
          </div>
        </div>

        {/* Price Details */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3 text-sm border-b border-slate-700/50 pb-2">Price Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>Total Items</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Price</span>
              <span>₹ 747</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Staff Referral Discount</span>
              <span>-₹ 47</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Shipping Amount</span>
              <span>₹ 50</span>
            </div>
            <div className="border-t border-slate-700/50 pt-2 mt-2 flex justify-between text-white font-semibold">
              <span>Total Amount</span>
              <span>₹ 750</span>
            </div>
          </div>
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

export default OrderDetailsPage;