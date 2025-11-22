import React, { useState } from "react";
import { Link } from "react-router-dom";

const addresses = [
    {
        id: 1,
        name: "Tony Stark",
        phone: "9876543210",
        address: "London Street, Flat no 108, Maharashtra, 789458",
    },
    {
        id: 2,
        name: "Tony Stark",
        phone: "9876543210",
        address: "4517 Washington Ave. Manchester, Kentucky 394958",
    },
];

const ShippingAddressPage = () => {
    const [selected, setSelected] = useState(addresses[0].id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-start py-10">

            <h2 className="text-white text-lg font-semibold mb-6 text-left">
                Shipping Address
            </h2>

            <div className="w-full max-w-4xl flex flex-col gap-4">
                {addresses.map(addr => (
                    <div
                        key={addr.id}
                        className="relative bg-transparent border border-gray-300 rounded-lg p-4 flex items-start justify-between gap-4"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-1">
                                <span className="text-white font-medium">{addr.name}</span>
                                <span className="text-white text-sm">{addr.phone}</span>
                            </div>
                            <div className="text-gray-300 text-sm mb-2">{addr.address}</div>
                            <Link to={`/address-form/${5}`} className="text-yellow-400 text-sm mr-4 hover:underline">Edit</Link>
                            <button  className="text-red-400 text-sm hover:underline">Remove</button>
                        </div>

                        <input
                            type="radio"
                            className="accent-[#C8AC5B] w-5 h-5 mt-2"
                            checked={selected === addr.id}
                            onChange={() => setSelected(addr.id)}
                            name="selectedAddress"
                        />
                    </div>
                ))}
            </div>

            <Link to='/address-form'
                className="mt-8 px-10 py-3 rounded-md bg-[#C8AC5B] text-white text-lg font-semibold transition hover:bg-yellow-600"
                type="button"
            >
                Add New Address
            </Link>
        </div>
    );
};

export default ShippingAddressPage;
