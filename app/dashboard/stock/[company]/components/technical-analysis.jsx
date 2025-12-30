import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, ArrowUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const TechnicalAnalysis = () => {
    return (
        <Card className='border-border bg-card shadow-sm'>
            <CardContent className='p-5 sm:p-6'>
                {/* Header */}
                <div className='flex items-center gap-3 mb-6'>
                    <TrendingUp className='size-5 text-primary' />
                    <h2 className='text-[18px] font-bold tracking-tight text-foreground'>
                        Technical Analysis
                    </h2>
                </div>

                {/* Bullish Status Section */}
                <div className='flex items-start gap-4 mb-8'>
                    <div className='size-11 rounded-full bg-positive/10 flex items-center justify-center shrink-0'>
                        <ArrowUp className='size-6 text-positive' />
                    </div>
                    <div className='space-y-1.5'>
                        <Badge className='bg-very-positive hover:bg-very-positive text-white border-none px-4 py-0.5 text-[13px] font-bold rounded-full'>
                            Bullish
                        </Badge>
                        <p className='text-[12px] text-tertiary'>
                            Based on technical indicators and price action
                        </p>
                    </div>
                </div>

                {/* Core Price Metrics */}
                <div className='space-y-2.5 mb-8'>
                    <div className='flex justify-between items-center bg-muted/30 px-4 py-3 rounded-xl border border-border/20'>
                        <span className='text-[14px] text-secondary font-medium'>Close Price</span>
                        <span className='text-[16px] font-extrabold text-foreground'>$258.02</span>
                    </div>
                    <div className='flex justify-between items-center bg-muted/30 px-4 py-3 rounded-xl border border-border/20'>
                        <span className='text-[14px] text-secondary font-medium'>Support</span>
                        <span className='text-[16px] font-extrabold text-primary'>$174.00</span>
                    </div>
                    <div className='flex justify-between items-center bg-muted/30 px-4 py-3 rounded-xl border border-border/20'>
                        <span className='text-[14px] text-secondary font-medium'>Resistance</span>
                        <span className='text-[16px] font-extrabold text-negative'>$262.00</span>
                    </div>
                </div>

                {/* Moving Averages Section */}
                <div className='mb-8'>
                    <h3 className='text-[16px] font-bold text-foreground mb-4'>Moving Averages</h3>
                    <div className='divide-y divide-border/40'>
                        {[
                            { label: '5-Day MA', value: '$228.02', status: 'Negative' },
                            { label: '50-Day MA', value: '$212.24', status: 'Positive' },
                            { label: '200-Day MA', value: '$221.02', status: 'Positive' },
                        ].map((item, idx) => (
                            <div key={idx} className='flex items-center justify-between py-4 group'>
                                <span className='text-[14px] text-secondary font-medium'>{item.label}</span>
                                <div className='flex items-center gap-5'>
                                    <span className='text-[15px] font-extrabold text-foreground'>{item.value}</span>
                                    <Badge 
                                        className={cn(
                                            "min-w-[84px] justify-center px-2 py-0.5 border-none text-[12px] font-bold rounded-full shadow-none",
                                            item.status === 'Positive' 
                                                ? "bg-positive/10 text-positive hover:bg-positive/15" 
                                                : "bg-negative/10 text-negative hover:bg-negative/15"
                                        )}
                                    >
                                        {item.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Momentum Indicators Section */}
                <div className='mb-8'>
                    <h3 className='text-[16px] font-bold text-foreground mb-4'>Momentum Indicators</h3>
                    <div className='grid grid-cols-3 gap-3'>
                        {[
                            { label: 'RSI', value: '62.31', status: 'Neutral' },
                            { label: 'MACD', value: '5.16', status: 'Positive' },
                            { label: 'STOCHASTIC', value: '77.67', status: 'Neutral' },
                        ].map((item, idx) => (
                            <div key={idx} className='p-4 bg-muted/30 rounded-xl flex flex-col items-start'>
                                <p className='text-[11px] font-bold text-tertiary mb-1 uppercase tracking-wider'>{item.label}</p>
                                <p className='text-[20px] font-extrabold text-foreground mb-1 leading-tight'>{item.value}</p>
                                <p className={cn(
                                    "text-[13px] font-bold",
                                    item.status === 'Positive' ? "text-positive" : 
                                    item.status === 'Negative' ? "text-negative" : "text-tertiary"
                                )}>
                                    {item.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className='w-full h-px bg-border/60 mb-6' />

                {/* Analysis Description Footer */}
                <div className='space-y-4'>
                    <p className='text-[13px] text-tertiary leading-[1.6]'>
                        When trying to optimize the timing of an investment, it's critical to analyze whether the stock looks overbought or oversold, and in which direction the momentum is moving. Apple's (AAPL) stock is now priced above its 50-day and 200-day, but below its 5-day moving average, while its MACD (Moving Average Convergence Divergence) indicates that the stock's price movement momentum is strengthening. Historically, this is a positive setup in the medium and long-term. In particular, many institutional investors keep close watch of the 200-day moving average. Meanwhile, looking at the Stochastic Oscillator and RSI (Relative Strength Index), Apple's (AAPL) stock doesn't strongly signal being overbought or oversold. Overall, these technical indicators signal positive upward momentum. Therefore, this stock received a cumulative TA (Technical Analysis) score of 77.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default TechnicalAnalysis;

