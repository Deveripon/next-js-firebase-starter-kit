import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";

const EarningsSummary = () => {
    const [expandedPositive, setExpandedPositive] = useState(0);
    const [expandedNegative, setExpandedNegative] = useState(0);

    const positiveHighlights = [
        {
            title: "Strong Demand for iPhone 17 and Premium Devices",
            content: "Early sales figures suggest robust uptake of the iPhone 17, particularly the Pro models, driving higher ASPs and revenue growth."
        },
        {
            title: "Services Segment Growth Accelerates",
            content: "Revenue from the App Store, iCloud, and Apple Music saw double-digit growth, contributing significantly to overall margins."
        },
        {
            title: "Financial Strength and Consistent Shareholder Returns",
            content: "Apple continues to generate massive free cash flow, supporting ongoing dividends and aggressive share buyback programs."
        }
    ];

    const negativeHighlights = [
        {
            title: "Rising Competitive Pressure",
            content: "Intensifying competition in the smartphone market, particularly in China, poses a risk to market share retention."
        },
        {
            title: "Regulatory Challenges in the U.S. and Europe",
            content: "Ongoing antitrust investigations and the Digital Markets Act (DMA) in the EU could force changes to the App Store business model."
        },
        {
            title: "Macroeconomic Exposure",
            content: "Global economic uncertainties and currency fluctuations may impact consumer spending on high-end electronics."
        }
    ];

    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="space-y-6">
                    {/* Positive Highlights */}
                    <div>
                        <h3 className="text-[14px] font-bold text-foreground mb-3">Positive Highlights</h3>
                        <div className="space-y-3">
                            {positiveHighlights.map((item, index) => (
                                <div key={index} className="border border-border/50 rounded-xl overflow-hidden bg-[#F8FAFC]">
                                    <button
                                        onClick={() => setExpandedPositive(expandedPositive === index ? -1 : index)}
                                        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EBF9F1] text-[#007047]">
                                                <TrendingUp className="size-3.5" />
                                            </div>
                                            <span className="text-[13px] font-bold text-foreground">{item.title}</span>
                                        </div>
                                        {expandedPositive === index ? <ChevronUp className="size-4 text-secondary" /> : <ChevronDown className="size-4 text-secondary" />}
                                    </button>
                                    {expandedPositive === index && (
                                        <div className="px-3.5 pb-3.5 pt-0 text-[12px] text-foreground/80 leading-relaxed border-t border-dashed border-border/40 bg-card/50 p-3 mx-1 mt-1 rounded-b-lg">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Negative Highlights */}
                    <div>
                        <h3 className="text-[14px] font-bold text-foreground mb-3">Negative Highlights</h3>
                        <div className="space-y-3">
                            {negativeHighlights.map((item, index) => (
                                <div key={index} className="border border-border/50 rounded-xl overflow-hidden bg-[#FEF2F2]/50">
                                    <button
                                        onClick={() => setExpandedNegative(expandedNegative === index ? -1 : index)}
                                        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] text-[#C94A53]">
                                                <TrendingDown className="size-3.5" />
                                            </div>
                                            <span className="text-[13px] font-bold text-foreground">{item.title}</span>
                                        </div>
                                        {expandedNegative === index ? <ChevronUp className="size-4 text-secondary" /> : <ChevronDown className="size-4 text-secondary" />}
                                    </button>
                                    {expandedNegative === index && (
                                        <div className="px-3.5 pb-3.5 pt-0 text-[12px] text-foreground/80 leading-relaxed border-t border-dashed border-border/40 bg-card/50 p-3 mx-1 mt-1 rounded-b-lg">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EarningsSummary;
