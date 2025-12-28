import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, FileText } from "lucide-react";

const InvestmentRationale = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                     <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Investment Rationale
                    </h2>
                </div>

                <div className="space-y-4">
                    <p className="text-[14px] leading-relaxed text-foreground/80">
                        Apple's Q2 2025 financial performance, while exhibiting stable metrics across its income
                        statement, balance sheet, and cash flow, positions the company as an 'Outperform' within
                        the Information Technology sector. The company's robust year-over-year revenue growth of
                        9.63% to $94.036 billion and a corresponding 9.26% increase in net income to $23.434 billion
                        underscore its enduring market strength. Critically, Apple's strategic investments in Research
                        and Development, which increased by 10.74% to $8.866 billion, and its growing Net Property
                        Plant and Equipment, up 9.00% to $48.508 billion, align perfectly with the prevailing macro
                        trends of an unprecedented AI investment boom and significant capital expenditures in se...
                    </p>

                    <button className="text-[14px] font-medium text-primary hover:text-primary/80 transition-colors">
                        Show more
                    </button>

                    <div className="flex flex-col gap-3 mt-2">
                        {[
                            "Robust fundamentals relative to its peers",
                            "Sound balance sheet",
                            "Stable cash flow generation"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-very-positive/10 text-very-positive">
                                    <Check className="size-3" />
                                </div>
                                <span className="text-[13px] font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                        <div className="flex items-center text-tertiary text-[12px] font-medium">
                            <span className="mr-1"><FileText className="size-3.5" /></span>
                            <span>Filing Date: 2025-08-01 (Q2)</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InvestmentRationale;
