import { Card, CardContent } from "@/components/ui/card";
import { FileText } from 'lucide-react';

const AlternativeFactors = () => {
    const factors = [
        { label: "Sector Strength", value: "Average", color: "bg-muted text-foreground" },
        { label: "Technical Analysis", value: "Bullish", color: "bg-very-positive/10 text-very-positive" },
        { label: "ESG Score", value: "Neutral", color: "bg-muted text-foreground" },
        { label: "Analysts Opinion", value: "Outperform", color: "bg-very-positive/10 text-very-positive" }
    ];

    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                     <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Alternative Factors
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {factors.map((factor, idx) => (
                        <div key={idx} className="flex items-center justify-between pb-4 border-b border-border/40 last:border-0 last:pb-0">
                            <span className="text-[14px] text-secondary font-medium">{factor.label}</span>
                            <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${factor.color}`}>
                                {factor.value}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default AlternativeFactors;
