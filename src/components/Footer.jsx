import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #0d2a4a 100%)",
        }}
      />

      {/* Decorative gradient shapes */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #C9A227 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #C9A227 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT SECTION */}
          <div className="md:col-span-4">
            <div className="flex items-start gap-3 mb-5">
             

              {/* <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold tracking-wide">
                  <span className="text-[#C9A227]">I</span>CCHHA
                  <span className="text-[#C9A227]">PURTI</span>
                </h2>
                <p className="text-xs text-gray-400 italic">
                  पूर्ण करे हर इच्छा आपकी
                </p>
              </div> */}
              <div className="flex flex-col justify-center">
                 <img
                src="/logo.png"
                alt="IcchhaPurti"
                className="w-50 h-50 object-contain"
              />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Your one-stop destination for quality products. We are committed to delivering excellence and fulfilling every wish with our trusted service and premium selection.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {["𝕏", "f", "📷", "in"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #C9A227 0%, #a07d1c 100%)",
                  }}
                >
                  <span className="text-white text-sm font-bold">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE SECTION - Contact */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#C9A227]"></span> CONTACT INFO
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <a href="tel:+919876543210" className="flex items-center gap-3 group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(201, 162, 39, 0.15)",
                    border: "1px solid rgba(201, 162, 39, 0.3)",
                  }}
                >
                  <Phone size={18} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm text-white group-hover:text-yellow-400 transition-colors">
                    +91 9876543210
                  </p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:example@icchhapurti.com" className="flex items-center gap-3 group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(201, 162, 39, 0.15)",
                    border: "1px solid rgba(201, 162, 39, 0.3)",
                  }}
                >
                  <Mail size={18} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm text-white group-hover:text-yellow-400 transition-colors">
                    example@icchhapurti.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(201, 162, 39, 0.15)",
                    border: "1px solid rgba(201, 162, 39, 0.3)",
                  }}
                >
                  <MapPin size={18} className="text-[#C9A227]" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="text-sm text-gray-200">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - App Download */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#C9A227]"></span> DOWNLOAD APP
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Get the best experience on our mobile app. Download now!
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
                  border: "1px solid #444",
                }}
              >
                <div className="text-3xl">🍎</div>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
                  border: "1px solid #444",
                }}
              >
                <div className="text-3xl">▶️</div>
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>
            Copyright © 2025{" "}
            <span className="text-[#C9A227]">ICCHHA PURTI</span> All Rights Reserved
          </p>
          <p>
            Designed by{" "}
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Talentrise Technokrate Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
