import { Card, CardContent } from '@/components/ui/card';
import { Calendar, FileSearch, TrendingUp } from 'lucide-react';
import DataHeader from './data-header';

const InvestmentRationale = () => {
    return (
        <Card className='border border-border bg-card shadow-sm rounded-2xl p-0'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    icon={<FileSearch className='size-6 text-primary' />}
                    title='Investment Rationale'
                />

                <div className='space-y-4'>
                    <p className='text-[14px] leading-[20px] text-foreground/80'>
                        Apple's Q2 2025 financial performance, while exhibiting
                        stable metrics across its income statement, balance
                        sheet, and cash flow, positions the company as an
                        'Outperform' within the Information Technology sector.
                        The company's robust year-over-year revenue growth of
                        9.63% to $94.036 billion and a corresponding 9.26%
                        increase in net income to $23.434 billion underscore its
                        enduring market strength. Critically, Apple's strategic
                        investments in Research and Development, which increased
                        by 10.74% to $8.866 billion, and its growing Net
                        Property Plant and Equipment, up 9.00% to $48.508
                        billion, align perfectly with the prevailing macro
                        trends of an unprecedented AI investment boom and
                        significant capital expenditures in se...
                    </p>

                    <button className='text-[14px] font-medium text-primary hover:text-primary/80 transition-colors'>
                        Show more
                    </button>

                    <div className='flex flex-col gap-4 mt-2'>
                        {[
                            'Robust fundamentals relative to its peers',
                            'Sound balance sheet',
                            'Stable cash flow generation',
                        ].map((item, i) => (
                            <div key={i} className='flex items-center gap-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-very-positive/8 dark:bg-very-positive/8 text-very-positive dark:text-very-positive'>
                                    <TrendingUp className='size-3.5' />
                                </div>
                                <span className='text-[14px] font-normal text-foreground/90'>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-center gap-2 mt-6 pt-2'>
                        <Calendar className='size-4 text-tertiary' />
                        <span className='text-[13px] text-tertiary font-medium'>
                            Filing Date: 2025-08-01 (Q2)
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default InvestmentRationale;

