

const Register = () => {
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
            Create New Account
          </h2>

          <form className="space-y-3">
            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="Full Name" />
            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="Mobile Number" />
            <input type="email" className="w-full border px-3 py-2 rounded-md" placeholder="Email" />
            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="City" />
            <input type="text" className="w-full border px-3 py-2 rounded-md" placeholder="State" />

            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-md">
              Get OTP
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?
            <a href="/" className="text-blue-600 font-semibold"> Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
