import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Pencil } from "lucide-react";
import Image from 'next/image';
import AppleLogo from '@/app/widget/components/svgs/apple.svg';

const PeerComparison = () => {
    const peers = [
        { sym: 'AAPL', name: 'Apple', rating: 'Buy', ret: '+14.30%', close: '$258.82', target: '$230.00', color: 'bg-[#007047] text-white' },
        { sym: 'MSFT', name: 'Microsoft', rating: 'Hold', ret: '+10.89%', close: '$470.38', target: '$425.00', color: 'bg-muted text-foreground' },
        { sym: 'GOOGL', name: 'Google', rating: 'Outperform', ret: '-1.73%', close: '$173.68', target: '$180.00', color: 'bg-[#007047] text-white', retColor: 'text-[#C94A53]' },
        { sym: 'NVDA', name: 'Nvidia', rating: 'Buy', ret: '+17.13%', close: '$141.72', target: '$140.00', color: 'bg-[#007047] text-white' },
        { sym: 'AMZN', name: 'Amazon', rating: 'Sell', ret: '+15.44%', close: '$213.57', target: '$175.00', color: 'bg-[#C94A53] text-white' },
        { sym: 'META', name: 'Meta', rating: 'Underperform', ret: '+41.31%', close: '$697.71', target: '$545.00', color: 'bg-[#C94A5380] text-[#C94A53]' },
    ];

    const getLogo = (sym) => {
        if (sym === 'AAPL') return <Image src={AppleLogo} alt="AAPL" width={16} height={16} />;
        const colors = {
            MSFT: 'bg-blue-500',
            GOOGL: 'bg-red-500',
            NVDA: 'bg-green-600',
            AMZN: 'bg-yellow-500',
            META: 'bg-blue-600'
        };
        return <div className={`w-4 h-4 rounded-full ${colors[sym] || 'bg-gray-400'} flex items-center justify-center text-[8px] text-white font-bold`}>{sym[0]}</div>;
    }

    return (
        <Card className="border-border bg-card shadow-sm overflow-hidden text-card-foreground">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                         <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <BarChart2 className="size-5 rotate-90" />
                        </div>
                        <h2 className="text-[18px] font-bold tracking-tight">
                            Peer Comparison
                        </h2>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-lg text-[13px] font-bold text-foreground hover:bg-muted/50 px-3 py-1.5 transition-all">
                        <Pencil className="size-3.5" />
                        Edit Peers
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-[13px]">
                        <thead>
                            <tr className="border-b border-border/40">
                                <th className="pb-3 text-left font-medium text-secondary text-[12px]">Symbol</th>
                                <th className="pb-3 text-left font-medium text-secondary text-[12px]">AI Rating</th>
                                <th className="pb-3 text-right font-medium text-secondary text-[12px]">1Y Return</th>
                                <th className="pb-3 text-right font-medium text-secondary text-[12px]">Last Close Price</th>
                                <th className="pb-3 text-right font-medium text-secondary text-[12px]">Price Target</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                            {peers.map((peer, i) => (
                                <tr key={i} className="group">
                                    <td className="py-3.5 text-foreground font-bold">
                                        <div className="flex items-center gap-2">
                                            {getLogo(peer.sym)}
                                            <span>{peer.sym}</span>
                                        </div>
                                    </td>
                                    <td className="py-3.5">
                                        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold ${peer.color}`}>
                                            {peer.rating}
                                        </span>
                                    </td>
                                    <td className={`py-3.5 text-right font-bold ${peer.retColor || 'text-[#007047]'}`}>
                                        {peer.ret}
                                    </td>
                                    <td className="py-3.5 text-right text-foreground font-medium">
                                        {peer.close}
                                    </td>
                                    <td className="py-3.5 text-right text-foreground font-medium">
                                        {peer.target}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default PeerComparison;
