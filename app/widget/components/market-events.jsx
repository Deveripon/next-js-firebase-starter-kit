import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, TrendingUp } from "lucide-react";

const MarketEvents = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <h2 className="text-[18px] font-bold tracking-tight text-foreground mb-6">
                    Latest Market Events
                </h2>
                
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-[16px] font-bold text-foreground mb-2">
                            AAPL Stock Rises After Strong iPhone 17 Launch
                        </h3>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[12px] text-tertiary">02 Oct 2025</span>
                            <span className="text-secondary">•</span>
                            <div className="flex items-center gap-1.5 text-[#118841] text-[12px] font-medium">
                                <TrendingUp className="size-3" />
                                <span>Price Gain</span>
                            </div>
                            <span className="bg-[#EBF9F1] text-[#007047] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#007047]/10 uppercase">
                                Positive
                            </span>
                        </div>
                        <p className="text-[13px] text-foreground/80 leading-relaxed">
                            Apple shares advanced following stronger-than-expected iPhone 17 sales, driven by robust demand in Asia and record pre-orders in the U.S. market.
                        </p>
                    </div>

                    <div className="pt-6 border-t border-border">
                        <h4 className="text-[13px] font-bold text-foreground mb-4">
                            What's Driving the Event?
                        </h4>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-secondary">
                                    <TrendingUp className="size-3" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-foreground mb-1">iPhone 17 Demand Exceeds Forecasts</p>
                                    <p className="text-[12px] text-secondary leading-relaxed">
                                        Apple reported early sales surpassing expectations, suggesting solid consumer confidence and market resilience.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF9F1] text-[#007047]">
                                    <TrendingUp className="size-3" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-foreground mb-1">Services Segment Growth Accelerates</p>
                                    <p className="text-[12px] text-secondary leading-relaxed">
                                        Subscription revenues from Apple Music and iCloud rose sharply, adding consistent recurring income.
                                    </p>
                                </div>
                            </div>

                             <div className="flex gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF9F1] text-[#007047]">
                                    <TrendingUp className="size-3" />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-foreground mb-1">Analysts Upgrade Price Targets</p>
                                    <p className="text-[12px] text-secondary leading-relaxed">
                                        Multiple investment firms raised target prices after improved guidance and strong product adoption signals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 gap-6 text-[12px] text-secondary">
                           <button className="hover:text-foreground transition-colors"><ArrowRightIcon className="size-4 rotate-180" /></button>
                           <span>1/3</span>
                           <button className="hover:text-foreground transition-colors"><ArrowRightIcon className="size-4" /></button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MarketEvents;
