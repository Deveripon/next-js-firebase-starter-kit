import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { ArrowLeft, ArrowRight, TrendingUp } from 'lucide-react';
import DataHeader from './data-header';

const MarketEvents = () => {
    return (
        <Card className='border-border bg-card shadow-sm rounded-2xl'>
            <CardHeader className='p-6 border-b border-border/60'>
                <DataHeader className='mb-0!' title='Latest Market Events' />
            </CardHeader>
            <CardContent className=''>
                <div className='flex flex-col gap-6'>
                    <div className=''>
                        <h3 className='text-[18px] leading-[24px] font-medium text-foreground mb-2'>
                            AAPL Stock Rises After Strong iPhone 17 Launch
                        </h3>
                        <div className='flex items-center gap-3 mb-3'>
                            <span className='text-[14px] text-secondary'>
                                02 Oct 2025
                            </span>
                            <span className='text-secondary'>•</span>
                            <div className='flex items-center gap-1.5 text-positive text-[14px] font-normal'>
                                <TrendingUp className='size-3.5' />
                                <span className='text-secondary'>
                                    Price Gain
                                </span>
                            </div>
                            <span className='text-secondary'>•</span>
                            <span className='text-positive text-[14px] font-medium px-2 py-0.5 rounded border border-positive'>
                                Positive
                            </span>
                        </div>
                        <p className='text-[14px] leading-relaxed text-foreground mb-6'>
                            Apple shares advanced following
                            stronger-than-expected iPhone 17 sales, driven by
                            robust demand in Asia and record pre-orders in the
                            U.S. market.
                        </p>

                        <h4 className='text-[16px] font-medium leading-[24px] text-foreground mb-4'>
                            What's Driving the Event?
                        </h4>

                        <div className='space-y-4'>
                            <div className='flex gap-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive/8 text-positive'>
                                    <TrendingUp className='size-3.5' />
                                </div>
                                <div>
                                    <p className='text-[14px] font-medium text-foreground mb-1'>
                                        iPhone 17 Demand Exceeds Forecasts
                                    </p>
                                    <p className='text-[14px] text-foreground/70 leading-relaxed'>
                                        Apple reported early sales surpassing
                                        expectations, suggesting solid consumer
                                        confidence and market resilience.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive/8 text-positive'>
                                    <TrendingUp className='size-3.5' />
                                </div>
                                <div>
                                    <p className='text-[14px] font-medium text-foreground mb-1'>
                                        Services Segment Growth Accelerates
                                    </p>
                                    <p className='text-[14px] text-foreground/70 leading-relaxed'>
                                        Subscription revenues from Apple Music
                                        and iCloud rose sharply, adding
                                        consistent recurring income.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive/8 text-positive'>
                                    <TrendingUp className='size-3.5' />
                                </div>
                                <div>
                                    <p className='text-[14px] font-medium text-foreground mb-1'>
                                        Analysts Upgrade Price Targets
                                    </p>
                                    <p className='text-[14px] text-foreground/70 leading-relaxed'>
                                        Multiple investment firms raised target
                                        prices after improved guidance and
                                        strong product adoption signals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center items-center py-4 border-t border-border/60'>
                <div className='flex items-center justify-center gap-4'>
                    <button className='text-secondary hover:text-foreground transition-colors p-1'>
                        <ArrowLeft className='size-4' />
                    </button>
                    <span className='text-[14px] font-medium text-foreground'>
                        1/3
                    </span>
                    <button className='text-secondary hover:text-foreground transition-colors p-1'>
                        <ArrowRight className='size-4' />
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default MarketEvents;

