import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const GuidanceCard = () => {
    return (
        <Card className="border-border bg-card shadow-sm mb-6">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3">
                    <div className="mt-1">
                        <FileText className="size-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-[14px] font-bold text-foreground mb-1">Q1-2025: Guidance</h3>
                        <p className="text-[13px] leading-relaxed text-foreground/80">
                            Apple expects its September quarter total company revenue to grow mid- to high single digits year-over-year. The company anticipates Services revenue to grow at a year-over-year rate similar to what was reported in the June quarter. Apple projects gross margin to be between 46% and 47%, which includes the estimated impact of $1.1 billion in tariff-related costs. The company expects operating expenses to be between $15.6 billion and $15.8 billion. Apple estimates OI&E to be around negative $25 million, excluding any potential impact from the mark-to-market of minority investments, and the tax rate to be around 17%.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default GuidanceCard;
