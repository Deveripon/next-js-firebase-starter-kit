import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronRight, Monitor } from "lucide-react";
import Image from 'next/image';
import AppleLogo from '@/app/widget/components/svgs/apple.svg';

const DiscoverMore = () => {
    const stocks = [
        { sym: 'MSFT', name: 'Microsoft', price: '$461.97', change: '+0.35%', target: '$425.25', badge: 'Buy', color: 'bg-[#007047]' },
        { sym: 'NVDA', name: 'Nvidia', price: '$137.38', change: '+1.67%', target: '$140', badge: 'Outperform', color: 'bg-[#007047]' },
        { sym: 'AAPL', name: 'Apple', price: '$201.7', change: '+0.42%', target: '$235', badge: 'Hold', color: 'bg-secondary' },
        { sym: 'META', name: 'Meta Platforms', price: '$670.9', change: '+3.62%', target: '$545', badge: 'Hold', color: 'bg-secondary' },
        { sym: 'GOOGL', name: 'Alphabet', price: '$178.2', change: '+1.1%', target: '$190', badge: 'Buy', color: 'bg-[#C94A53]' }, // Using red for visual variety logic, though screenshot might be diff
    ];

    const getLogo = (sym) => {
         if (sym === 'AAPL') return <Image src={AppleLogo} alt="AAPL" width={24} height={24} className="rounded-full" />;
        const colors = {
            MSFT: 'bg-orange-500',
            NVDA: 'bg-green-600',
            META: 'bg-blue-600',
            GOOGL: 'bg-red-500',
        };
        return <div className={`w-6 h-6 rounded-full ${colors[sym] || 'bg-gray-400'} flex items-center justify-center text-[9px] text-white font-bold`}>{sym[0]}</div>;
    }

    return (
        <div className="pt-8">
            <h2 className="text-[18px] font-bold text-foreground mb-4">Discover More</h2>
            
            <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {stocks.map((stock, i) => (
                        <Card key={i} className="min-w-[200px] border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        {getLogo(stock.sym)}
                                        <div>
                                            <div className="text-[13px] font-bold text-foreground">{stock.sym}</div>
                                            <div className="text-[10px] text-secondary">{stock.name}</div>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${stock.color === 'bg-secondary' ? 'bg-secondary text-white' : 'bg-[#007047]'}`}>
                                        {stock.badge}
                                    </span>
                                </div>
                                
                                <div className="flex items-end justify-between mb-1">
                                    <span className="text-[11px] text-secondary font-medium">Close Price</span>
                                    <div className="text-right">
                                        <div className="text-[13px] font-bold text-foreground">{stock.price}</div>
                                        <div className="text-[10px] font-bold text-[#007047]">{stock.change}</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] text-secondary font-medium">Price Target</span>
                                    <div className="flex items-center gap-1 text-[11px] font-bold text-foreground">
                                        <div className="flex items-center justify-center size-3.5 rounded-full border border-border text-tertiary">
                                            <div className="size-1 rounded-full border border-current" />
                                        </div>
                                        {stock.target}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    
                     <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 size-10 rounded-full bg-card shadow-md border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors">
                        <ChevronRight className="size-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
