import { Card, CardContent } from "@/components/ui/card";
import { BarChart3 } from 'lucide-react';

const FundamentalRating = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BarChart3 className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Fundamental Rating
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Rating Row */}
                    <div className="flex items-center justify-between bg-muted/30 p-3 rounded-xl border border-border/50">
                        <span className="text-[14px] font-medium text-secondary">Rating</span>
                        <div className="flex items-center gap-3">
                            <span className="text-[14px] font-bold text-foreground">90<span className="text-secondary text-[12px]">/100</span></span>
                            <span className="bg-[#007047] text-white text-[11px] font-bold px-2 py-0.5 rounded">Buy</span>
                        </div>
                    </div>

                    {/* Price Target Row */}
                    <div className="flex items-center justify-between bg-muted/30 p-3 rounded-xl border border-border/50">
                        <span className="text-[14px] font-medium text-secondary">1Y Price Target</span>
                        <span className="text-[14px] font-bold text-foreground">$230.00</span>
                    </div>

                    {/* Potential Upside Row */}
                    <div className="flex items-center justify-between bg-muted/30 p-3 rounded-xl border border-border/50">
                        <span className="text-[14px] font-medium text-secondary">Potential Upside</span>
                        <span className="text-[14px] font-bold text-[#C94A53]">-10.86%</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FundamentalRating;
