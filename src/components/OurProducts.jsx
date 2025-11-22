import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "PARKER Vector Standard Chrome Pen", rating: 4.9, reviews: "2.3M", price: 249, originalPrice: 508, discount: 51, images: [
    "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1593462169757-e6f8961c1c5d?w=300&h=200&fit=crop"
  ]},
  { id: 2, name: "Premium Leather Notebook A5", rating: 4.8, reviews: "1.8M", price: 349, originalPrice: 699, discount: 50, images: [
    "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1517842645767-c639042777db?w=300&h=200&fit=crop"
  ]},
  { id: 3, name: "Wireless Bluetooth Earbuds Pro", rating: 4.7, reviews: "3.1M", price: 899, originalPrice: 1999, discount: 55, images: [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=300&h=200&fit=crop"
  ]},
  { id: 4, name: "Smart Watch Fitness Tracker", rating: 4.6, reviews: "2.5M", price: 1299, originalPrice: 2999, discount: 57, images: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=200&fit=crop"
  ]},
  { id: 5, name: "Portable Power Bank 20000mAh", rating: 4.8, reviews: "1.2M", price: 799, originalPrice: 1599, discount: 50, images: [
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=300&h=200&fit=crop"
  ]},
  { id: 6, name: "Designer Sunglasses UV400", rating: 4.5, reviews: "980K", price: 599, originalPrice: 1299, discount: 54, images: [
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=300&h=200&fit=crop"
  ]},
  { id: 7, name: "Stainless Steel Water Bottle", rating: 4.9, reviews: "1.5M", price: 449, originalPrice: 899, discount: 50, images: [
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=200&fit=crop"
  ]},
  { id: 8, name: "Mechanical Gaming Keyboard RGB", rating: 4.7, reviews: "2.1M", price: 1499, originalPrice: 3499, discount: 57, images: [
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop"
  ]}
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setCurrent(p => (p + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div className="relative h-36 overflow-hidden group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false); setCurrent(0); }}>
      {images.map((img, i) => (
        <img key={i} src={img} alt="Product" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" style={{ opacity: i === current ? 1 : 0 }}/>
      ))}
      
      {isHovered && (
        <>
          <button onClick={(e) => { e.stopPropagation(); setCurrent(p => (p - 1 + images.length) % images.length); }} className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={14} className="text-gray-700"/>
          </button>
          <button onClick={(e) => { e.stopPropagation(); setCurrent(p => (p + 1) % images.length); }} className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={14} className="text-gray-700"/>
          </button>
        </>
      )}
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} className="w-1.5 h-1.5 rounded-full transition-all" style={{ backgroundColor: i === current ? '#C9A227' : 'rgba(255,255,255,0.5)' }}/>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative group">
      <div className="absolute top-2 left-2 z-10">
        <div className="px-2 py-1 rounded-md text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}>
          {product.discount}% OFF
        </div>
      </div>
      
      <button onClick={() => setLiked(!liked)} className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110">
        <Heart size={16} fill={liked ? '#ef4444' : 'none'} stroke={liked ? '#ef4444' : '#666'} />
      </button>

      <div style={{ background: 'linear-gradient(180deg, #e8f4f8 0%, #c8dce8 100%)' }}>
        <ImageCarousel images={product.images} />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-10">{product.name}</h3>
        
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(201,162,39,0.1)' }}>
            <Star size={12} fill="#C9A227" stroke="#C9A227"/>
            <span className="text-xs font-semibold" style={{ color: '#C9A227' }}>{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviews} Reviews)</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold" style={{ color: '#C9A227' }}>₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 border-2 rounded-lg font-medium text-xs transition-all hover:bg-amber-50" style={{ borderColor: '#C9A227', color: '#C9A227' }}>
            <ShoppingCart size={14}/> Add
          </button>
          <Link to="/product/product1" className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg font-medium text-xs text-white transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C9A227 0%, #a07d1c 100%)' }}>
            <Eye size={14}/> Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OurProducts() {
  return (
    <div className="min-h-screen p-6 md:p-8" style={{ background: 'linear-gradient(135deg, #0f1c2e 0%, #1a3352 50%, #0d2440 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Our Products</h2>
            <p className="text-gray-400 text-sm">Discover amazing deals on top products</p>
          </div>
          <Link to="/products" className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all hover:gap-2" style={{ backgroundColor: 'rgba(201,162,39,0.15)', color: '#C9A227', border: '1px solid rgba(201,162,39,0.3)' }}>
            View All <ChevronRight size={16}/>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}