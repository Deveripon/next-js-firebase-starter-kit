import { Card, CardContent } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import DataHeader from './data-header';

const FundamentalRating = () => {
    return (
        <Card className='border-border bg-card shadow-sm p-0'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    icon={<BarChart3 className='size-6 text-primary' />}
                    title='Fundamental Rating'
                />

                <div className='flex flex-col gap-4'>
                    {/* Rating Row */}
                    <div className='flex items-center justify-between bg-positive/10 p-3 rounded-[8px] border border-border/50'>
                        <span className='text-[14px] font-normal text-secondary'>
                            Rating
                        </span>
                        <div className='flex items-center gap-3'>
                            <span className='text-[14px] font-bold text-foreground'>
                                90
                                <span className='text-[12px]'>/100</span>
                            </span>
                            <span className='bg-very-positive text-white text-[14px] font-medium px-2 py-0.5 rounded'>
                                Buy
                            </span>
                        </div>
                    </div>

                    {/* Price Target Row */}
                    <div className='flex items-center justify-between bg-muted/30 p-3 rounded-[8px] border border-border/50'>
                        <span className='text-[14px] font-normal text-secondary'>
                            1Y Price Target
                        </span>
                        <span className='text-[14px] font-bold text-foreground'>
                            $230.00
                        </span>
                    </div>

                    {/* Potential Upside Row */}
                    <div className='flex items-center justify-between bg-muted/30 p-3 rounded-[8px] border border-border/50'>
                        <span className='text-[14px] font-medium text-secondary'>
                            Potential Upside
                        </span>
                        <span className='text-[14px] font-bold text-[#C94A53]'>
                            -10.86%
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FundamentalRating;

