import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RedeemHistory() {
    const [activeTab, setActiveTab] = useState('approved');
    const [currentPage, setCurrentPage] = useState(1);

    const tabs = [
        { id: 'pending', label: 'Pending' },
        { id: 'approved', label: 'Approved' },
        { id: 'rejected', label: 'Rejected' },
    ];

    const approvedData = [
        { id: 1, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 2, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 3, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 4, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 5, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 6, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 7, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 8, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
        { id: 9, title: 'Amount Redemption', status: 'Redeem Request Approved', time: '6:30AM', date: '20 Aug 2025', amount: 1000 },
    ];

    const pendingData = [
        { id: 1, title: 'Amount Redemption', status: 'Redeem Request Pending', time: '7:30AM', date: '21 Aug 2025', amount: 500 },
        { id: 2, title: 'Amount Redemption', status: 'Redeem Request Pending', time: '8:00AM', date: '21 Aug 2025', amount: 750 },
    ];

    const rejectedData = [
        { id: 1, title: 'Amount Redemption', status: 'Redeem Request Rejected', time: '5:30AM', date: '19 Aug 2025', amount: 2000 },
    ];

    const getData = () => {
        switch (activeTab) {
            case 'pending': return pendingData;
            case 'approved': return approvedData;
            case 'rejected': return rejectedData;
            default: return approvedData;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
            {/* Cosmic background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/20 via-cyan-500/15 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Spiral circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-500/10 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-amber-500/15 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full filter blur-xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-4">
                {/* Header */}
                <h1 className="text-white font-bold text-xl mb-6">Redeem History</h1>

                {/* Tabs */}
                <div className="relative mb-6">
                    <div className="flex border-b border-slate-700">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setCurrentPage(1);
                                }}
                                className={`flex-1 py-3 text-center text-sm font-medium transition-all duration-300 relative
                  ${activeTab === tab.id ? 'text-amber-400' : 'text-gray-400 hover:text-gray-300'}`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Transaction List */}
                <div className="space-y-1">
                    {getData().map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-4 border-b border-slate-700/50 hover:bg-slate-800/20 transition-colors px-2 rounded"
                        >
                            <div>
                                <h3 className="text-white text-sm font-medium">{item.title}</h3>
                                <p className={`text-xs ${activeTab === 'approved' ? 'text-green-400' :
                                        activeTab === 'pending' ? 'text-amber-400' : 'text-red-400'
                                    }`}>
                                    {item.status}
                                </p>
                                <p className="text-gray-500 text-xs">{item.time}, {item.date}</p>
                            </div>
                            <div className="text-white text-sm font-semibold">
                                ₹ {item.amount}
                            </div>
                        </div>
                    ))}

                    {getData().length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            No {activeTab} redemptions found
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {getData().length > 0 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                        <button
                            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center transition-colors"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {[1, 2, '...', 6].map((page, i) => (
                            <button
                                key={i}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors text-sm font-medium
                  ${page === currentPage
                                        ? 'bg-amber-500 text-white'
                                        : page === '...'
                                            ? 'bg-transparent text-gray-400 cursor-default'
                                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                                    }`}
                                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                                disabled={page === '...'}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center transition-colors"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}