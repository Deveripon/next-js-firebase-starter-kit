import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import DataHeader from './data-header';

const AlternativeFactors = () => {
    const factors = [
        {
            label: 'Sector Strength',
            value: 'Average',
            color: 'bg-neutral/10 text-neutral',
        },
        {
            label: 'Technical Analysis',
            value: 'Bullish',
            color: 'bg-positive/10 text-positive',
        },
        {
            label: 'ESG Score',
            value: 'Neutral',
            color: 'bg-neutral/10 text-neutral',
        },
        {
            label: 'Analysts Opinion',
            value: 'Outperform',
            color: 'bg-positive/10 text-positive',
        },
    ];

    return (
        <Card className='border-border bg-card shadow-sm p-0'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    icon={<FileText className='size-6 text-primary' />}
                    title='Alternative Factors'
                />

                <div className='flex flex-col gap-4'>
                    {factors.map((factor, idx) => (
                        <div
                            key={idx}
                            className='flex items-center justify-between pb-4 border-b border-border/40 last:border-0 last:pb-0'>
                            <span className='text-[14px] leading-[20px] text-secondary font-normal'>
                                {factor.label}
                            </span>
                            <span
                                className={`px-3 py-1 rounded-full text-[14px] leading-[16px] font-medium ${factor.color}`}>
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

