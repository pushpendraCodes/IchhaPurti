import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Notification() {
    const [activeTab, setActiveTab] = useState('unread');
    const [currentPage, setCurrentPage] = useState(1);

    const tabs = [
        { id: 'unread', label: 'Unread' },
        { id: 'read', label: 'Read' },
    ];

    // Dummy data updated
    const unreadData = [
        { id: 1, title: "Offer Received", desc: "You have received a 20% discount offer.", time: "05:41 AM" },
        { id: 2, title: "New Message", desc: "Admin replied to your redemption request.", time: "06:15 AM" },
        { id: 3, title: "Lucky Draw", desc: "You won 500 credits in lucky draw.", time: "07:20 AM" },
        { id: 4, title: "System Update", desc: "New version available, update required.", time: "08:10 AM" },
    ];

    const readData = [
        { id: 1, title: "Redeem Approved", desc: "Your redeem request for ₹1000 has been approved.", time: "Yesterday" },
        { id: 2, title: "Redeem Successful", desc: "Amount transferred to your wallet.", time: "2 days ago" },
        { id: 3, title: "Login Alert", desc: "Your account was logged in from new device.", time: "3 days ago" },
        { id: 4, title: "Welcome Bonus", desc: "You received 200 bonus credits.", time: "4 days ago" },
    ];

    const getData = () => {
        switch (activeTab) {
            case 'unread': return unreadData;
            case 'read': return readData;
            default: return unreadData;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/20 via-cyan-500/15 to-blue-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-4">
                <h1 className="text-white font-bold text-xl mb-6">Notification</h1>

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

                {/* Notification List */}
                <div className="space-y-1">
                    {getData().map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-4 border-b border-slate-700/50 hover:bg-slate-800/20 transition-colors px-2 rounded"
                        >
                            {/* LEFT */}
                            <div className="flex-1 pr-4">
                                <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                            </div>

                            {/* RIGHT TIME */}
                            <div className="text-xs text-gray-500 whitespace-nowrap">
                                {item.time}
                            </div>
                        </div>
                    ))}

                    {getData().length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            No {activeTab} notifications found
                        </div>
                    )}
                </div>

                {/* Pagination Dummy */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center">
                        <ChevronLeft size={16} />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-amber-500 text-white">1</button>
                    <button className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-gray-300">2</button>
                    <button className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-gray-300">3</button>

                    <button className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
