import React from "react";

const termsText = `
Welcome to [Your App Name] ("we", "our", "us"). By accessing or using our mobile application ("App") and related services (collectively, the "Service"), you agree to comply with and be bound by the following Terms and Conditions ("Terms"). Please read them carefully before using our Service.

If you do not agree with these Terms, please do not use the App.

1. Eligibility
• You must be 18 years or older to register and use this App.
• By creating an account, you confirm that you are legally competent to enter into a binding contract.
• The App is intended only for individuals seeking matrimonial alliances and not for casual dating or friendship.

2. Account Registration
• You must provide accurate, complete, and current information during registration.
• You are responsible for maintaining the confidentiality of your account credentials.
• You agree to immediately notify us of any unauthorized use of your account.
• We reserve the right to refuse or terminate accounts that provide false information or misuse the App.

3. User Obligations
By using the Service, you agree that:
• You will use the App for lawful and matrimonial purposes only.
• You will not share, abuse, or transmit any content that is obscene, defamatory, or discriminatory.
• You will not impersonate any person or entity.
• You will not use the App for any commercial solicitation, spam, or promotional activities without prior consent.

4. Content and License
• When you submit content or provide input to us, you grant us a non-exclusive worldwide, royalty-free license to use, display, and distribute it for the purposes of service delivery.
• You are responsible for the accuracy and authenticity of user profiles.
• All user data will be collected and processed according to our Privacy Policy.

5. Subscription and Payments
• Certain services may require paid subscriptions.
• We reserve the right to change pricing or payment terms with prior notice.
`;

const TermsPage = () => (


      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 border border-blue-400/30 rounded-full"></div>
        <div className="absolute top-40 left-1/3 w-64 h-64 border border-blue-300/20 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 border border-amber-400/30 rounded-full"></div>
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
  <div
    className="min-h-screen flex flex-col items-center px-4 py-10"
    style={{ backgroundImage: "url('your-bg-image-url.jpg')" }}>
    <div className="w-full max-w-5xl  bg-opacity-50 rounded-lg p-8">
      <h2 className="text-white font-bold text-lg mb-2">Terms And Conditions</h2>
      <h3 className="text-white font-semibold mb-2 text-base">Terms & Conditions</h3>
      <div className="text-gray-100 text-sm mb-4">Effective Date: 1st January, 2025</div>
      <div className="text-gray-200 whitespace-pre-line leading-relaxed text-sm">
        {termsText}
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

export default TermsPage;
