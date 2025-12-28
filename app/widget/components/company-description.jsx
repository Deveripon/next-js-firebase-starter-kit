import { Card, CardContent } from "@/components/ui/card";
import { ScrollText } from 'lucide-react';

const CompanyDescription = () => {
    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ScrollText className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Company Description
                    </h2>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Tech Stock", "High Dividend", "Mega Large Cap"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted rounded-full text-[11px] font-bold text-secondary">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-[13px] leading-relaxed text-foreground/80 mb-4">
                    Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts, as well as advertising services include third-party licensing arrangements and its own advertising p...
                </p>

                <button className="text-[13px] font-medium text-primary hover:text-primary/80 transition-colors">
                    Read Full Description
                </button>
            </CardContent>
        </Card>
    );
};

export default CompanyDescription;
