import { Card, CardContent } from "@/components/ui/card";
import { Activity, ArrowUp } from "lucide-react";

const TechnicalAnalysis = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Activity className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Technical Analysis
                    </h2>
                </div>

                <div className="flex flex-col items-center mb-6">
                     <div className="relative mb-4">
                        <div className="w-32 h-16 overflow-hidden relative">
                             {/* Gauge Background */}
                            <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-muted/30 box-border border-b-0 border-l-0 border-r-0 -rotate-45 origin-center z-0"></div>
                             {/* Gauge Value (Green part) */}
                             <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-[#007047] box-border border-b-transparent border-l-transparent border-r-transparent rotate-45 origin-center z-10" style={{ transform: 'rotate(225deg)' }}></div> 
                             {/* Pointer */}
                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-14 bg-foreground origin-bottom rotate-45 z-20" style={{ transform: 'translateX(-50%) rotate(-45deg)' }}></div>
                             <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full z-20"></div>
                        </div>
                     </div>
                     <span className="bg-[#007047] text-white px-3 py-1 rounded-full text-[13px] font-bold flex items-center gap-1 shadow-sm">
                        <ArrowUp className="size-3.5" /> Bullish
                     </span>
                     <p className="text-[11px] text-tertiary mt-2 text-center max-w-[200px]">
                        Based on technical indicators and price action
                     </p>
                </div>

                <div className="space-y-3 bg-muted/20 p-4 rounded-xl border border-border/40">
                    <div className="flex justify-between items-center text-[13px]">
                        <span className="text-secondary font-medium">Close Price</span>
                        <span className="font-bold text-foreground">$258.02</span>
                    </div>
                    <div className="w-full h-px bg-border/40" />
                     <div className="flex justify-between items-center text-[13px]">
                        <span className="text-secondary font-medium">Support</span>
                        <span className="font-bold text-[#2B6CEF]">$174.00</span>
                    </div>
                     <div className="w-full h-px bg-border/40" />
                     <div className="flex justify-between items-center text-[13px]">
                        <span className="text-secondary font-medium">Resistance</span>
                        <span className="font-bold text-[#C94A53]">$262.00</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TechnicalAnalysis;
