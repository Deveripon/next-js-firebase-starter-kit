import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from 'lucide-react';

const CompanyProfile = () => {
    const profileData = [
        { label: 'Market Cap', value: '$3.83T' },
        { label: 'Volume', value: '54.08M' },
        { label: 'Beta (1Y)', value: '1.12' },
        { label: 'Country', value: 'United States' },
        { label: 'Employees', value: '150K' },
        { label: 'Div. Yield', value: '0.45%' },
        { label: 'PE Ratio', value: '39.25' },
        { label: 'Revenue Growth', value: '5.97%' },
        { label: 'Sector', value: 'Information Technology' },
        { label: 'Industry', value: 'Computers & Peripherals and Office Electronics', alignRight: true }
    ];

    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Building2 className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Company Profile
                    </h2>
                </div>
                <div className="space-y-4">
                    {profileData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between pb-3 border-b border-border/40 last:border-0 last:pb-0"
                        >
                            <span className="text-[13px] font-medium text-secondary">
                                {item.label}
                            </span>
                            <span
                                className={`text-[13px] font-medium text-foreground ${
                                    item.alignRight ? 'text-right max-w-[200px]' : ''
                                }`}
                            >
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default CompanyProfile;
