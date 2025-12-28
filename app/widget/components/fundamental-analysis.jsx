import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const FundamentalAnalysis = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Fundamental Analysis
                    </h2>
                </div>
                <p className="text-[14px] leading-relaxed text-foreground/80 font-medium">
                    Apple's financial results for Q2 2025, ending June 28, 2025, paint a picture of
                    a company navigating a complex yet opportunity-rich Information Technology
                    landscape. While revenue growth remains solid and operating margins stable,
                    there remain competitive pressures across key product segments against
                    prevailing macroeconomic uncertainties and a structurally low-rate environment
                    which weigh on valuation multiples, particularly for growth. The stock
                    itself is undergoing re‑rating as investors rebalance AI investment boom
                    and substantial capital expenditure toward infrastructure.
                </p>
                <div className="mt-6 flex justify-center">
                    <button className="text-[13px] font-bold text-primary hover:underline transition-all">
                        Read Full Description
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default FundamentalAnalysis;
