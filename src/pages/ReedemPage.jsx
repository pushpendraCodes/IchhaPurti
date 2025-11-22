import { useState } from 'react';
import { Wallet } from 'lucide-react';

export default function RedeemPage() {
    const [balance] = useState(2000);

    const transactions = [
        { id: 1, type: 'credit', title: 'Amount Credited', desc: 'Lucky draw winning', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 2, type: 'debit', title: 'Amount Debited', desc: 'Amount Redemption', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 3, type: 'credit', title: 'Amount Credited', desc: 'Lucky draw winning', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 4, type: 'debit', title: 'Amount Debited', desc: 'Amount Redemption', time: '8:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 5, type: 'credit', title: 'Amount Credited', desc: 'Lucky draw winning', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 6, type: 'debit', title: 'Amount Debited', desc: 'Amount Redemption', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 7, type: 'credit', title: 'Amount Credited', desc: 'Lucky draw winning', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 8, type: 'debit', title: 'Amount Debited', desc: 'Amount Redemption', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 9, type: 'debit', title: 'Amount Debited', desc: 'Amount Redemption', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 10, type: 'credit', title: 'Amount Credited', desc: 'Lucky draw winning', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Animated cosmic background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Spiral effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-500/10 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-4">
                {/* Header */}
                <h1 className="text-white font-bold text-xl mb-4">Reedem </h1>

                {/* Balance Card */}
                <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-xl p-6 mb-4 shadow-2xl border border-red-700/50">
                    <div className="flex flex-col items-center">
                        {/* Wallet Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-3 shadow-lg">
                            <Wallet className="text-white" size={24} />
                        </div>

                        <p className="text-amber-400 text-sm mb-1">Available Balance</p>
                        <h2 className="text-white text-3xl font-bold mb-4">₹ {balance}</h2>

                        {/* Redeem Button */}
                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
                            Redeem
                        </button>
                    </div>
                </div>
              <div className="flex items-center justify-between gap-6 w-full  py-6">
    <div className="flex-1">
        <label className="block text-white text-sm mb-2">
            Enter Redeem Amount
        </label>
        <input
            className="w-full bg-white rounded-md py-3 px-4 text-lg border-none outline-none"
            type="text"
            placeholder="₹ 1000"
        />
    </div>
    <button
        className="bg-[#C8AC5B] mt-5 hover:bg-yellow-600 text-white font-semibold rounded-md px-10 py-3 transition"
        type="button"
    >
        Redeem Now
    </button>
</div>


            </div>
        </div>
    );
}