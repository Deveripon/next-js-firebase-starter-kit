import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';
import DataHeader from './data-header';

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
        {
            label: 'Industry',
            value: 'Computers & Peripherals and Office Electronics',
            alignRight: true,
        },
    ];

    return (
        <Card className='border-border bg-card shadow-sm'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    title='Company Profile'
                    icon={<Building2 className='size-6 text-primary' />}
                />
                <div className='space-y-4'>
                    {profileData.map((item, idx) => (
                        <div
                            key={idx}
                            className='flex items-center justify-between pb-3 border-b border-border/40 last:border-0 last:pb-0'>
                            <span className='text-[14px] font-normal leading-[20px] text-secondary'>
                                {item.label}
                            </span>
                            <span
                                className={`text-[14px] font-normal leading-[20px] text-foreground ${
                                    item.alignRight ? 'text-right ' : ''
                                }`}>
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

