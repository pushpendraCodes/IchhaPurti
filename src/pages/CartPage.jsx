import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'PARKER Vector Standard Chrome Pen', price: 249, quantity: 1, image: '🖊️', color: 'blue' },
    { id: 2, name: 'PARKER Vector Standard Chrome Pen', price: 249, quantity: 1, image: '🖊️', color: 'gold' },
    { id: 3, name: 'PARKER Vector Standard Chrome Pen', price: 249, quantity: 1, image: '🖊️', color: 'orange' }
  ]);

  const address = {
    name: 'Tony Stark',
    street: 'London Street, Flat no 108, Maharashtra, 789458',
    mobile: '+91 9876543210'
  };

  const staffDiscount = 47;
  const shippingAmount = 50;

  const updateQuantity = (id, delta) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalAmount = totalPrice - staffDiscount + shippingAmount;

  const PenIcon = ({ color }) => (
    <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <defs>
          <linearGradient id={`pen-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color === 'blue' ? '#1e3a5f' : color === 'gold' ? '#d4a853' : '#e07830'} />
            <stop offset="100%" stopColor={color === 'blue' ? '#0f1f33' : color === 'gold' ? '#b8860b' : '#c45c1a'} />
          </linearGradient>
        </defs>
        <rect x="8" y="5" width="6" height="30" rx="1" fill={`url(#pen-${color})`} transform="rotate(-30 20 20)" />
        <polygon points="6,35 10,28 14,35" fill="#c0c0c0" transform="rotate(-30 20 20)" />
        <rect x="8" y="5" width="6" height="4" rx="1" fill="#c0c0c0" transform="rotate(-30 20 20)" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-4 md:p-6 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-white mb-4">My Cart</h1>

        {/* Delivery Address */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-slate-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white text-sm">
                <span className="text-gray-400">Deliver to: </span>
                <span className="font-semibold">{address.name}</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">{address.street}</p>
              <p className="text-gray-400 text-sm">Mobile Number: {address.mobile}</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Change Address
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 mb-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-4">
                <PenIcon color={item.color} />
                <div className="flex-1">
                  <h3 className="text-white text-sm font-medium">{item.name}</h3>
                  <p className="text-amber-500 font-semibold mt-1">₹ {item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 bg-slate-700 hover:bg-slate-600 text-white rounded flex items-center justify-center transition-colors">−</button>
                    <span className="w-8 h-7 bg-white text-slate-800 rounded flex items-center justify-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 bg-slate-700 hover:bg-slate-600 text-white rounded flex items-center justify-center transition-colors">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-300 text-xs transition-colors">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 && (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 mb-4 border border-slate-700 text-center">
            <p className="text-gray-400">Your cart is empty</p>
          </div>
        )}

        {/* Price Details */}
        {cartItems.length > 0 && (
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-slate-700">
            <h3 className="text-white font-semibold mb-3">Price Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Total Items</span>
                <span className="text-white">{totalItems}</span>
              </div>
              <div className="flex justify-between text-gray-400 border-b border-slate-700 border-dashed pb-2">
                <span>Price</span>
                <span className="text-white">₹ {totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-400 border-b border-slate-700 border-dashed pb-2">
                <span>Staff Referral Discount</span>
                <span className="text-green-400">-₹ {staffDiscount}</span>
              </div>
              <div className="flex justify-between text-gray-400 border-b border-slate-700 border-dashed pb-2">
                <span>Shipping Amount</span>
                <span className="text-white">₹ {shippingAmount}</span>
              </div>
              <div className="flex justify-between text-white font-semibold pt-1">
                <span>Total Amount</span>
                <span className="text-amber-500">₹ {totalAmount}</span>
              </div>
            </div>
          </div>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <div className="flex justify-center">
            <Link to='/payments' className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
              Check Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}