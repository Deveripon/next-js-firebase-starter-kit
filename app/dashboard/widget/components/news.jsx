import { Card, CardContent } from '@/components/ui/card';
import {
    ChevronDown,
    ChevronUp,
    FileText,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import DataHeader from './data-header';

const News = () => {
    const [activeTab, setActiveTab] = useState('summary');
    const [expandedPositive, setExpandedPositive] = useState(null);
    const [expandedNegative, setExpandedNegative] = useState(null);

    const togglePositive = index => {
        setExpandedPositive(expandedPositive === index ? null : index);
    };

    const toggleNegative = index => {
        setExpandedNegative(expandedNegative === index ? null : index);
    };

    const positiveHighlights = [
        'Strong Demand for iPhone 17 and Premium Devices',
        'Services Segment Growth Accelerates',
        'Financial Strength and Consistent Shareholder Returns',
    ];

    const negativeHighlights = [
        'Rising Competitive Pressure',
        'Regulatory Challenges in the U.S. and Europe',
        'Macroeconomic Exposure',
    ];

    return (
        <Card className='border-border bg-card shadow-sm p-0 rounded-2xl'>
            <CardContent className='p-6'>
                <div className='mb-6'>
                    <DataHeader
                        icon={<FileText className='size-6 text-primary' />}
                        title='News'
                    />
                    <p className='text-[14px] text-secondary -mt-4'>
                        Stay updated with the latest news, with AI sentiment
                        insights.
                    </p>
                </div>

                {/* Tabs */}
                <div className='flex p-1 bg-muted/80 rounded-full mb-6'>
                    <button
                        onClick={() => setActiveTab('summary')}
                        className={`flex-1 py-2 rounded-full text-[14px] font-medium transition-all ${
                            activeTab === 'summary'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-secondary hover:text-foreground'
                        }`}>
                        AI Summary
                    </button>
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`flex-1 py-2 rounded-full text-[14px] font-medium transition-all ${
                            activeTab === 'list'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-secondary hover:text-foreground'
                        }`}>
                        News List
                    </button>
                </div>

                {/* Sentiment Box */}
                <div className='bg-[#EFF8F3] dark:bg-emerald-950/20 rounded-xl p-4 mb-6 flex items-center gap-2'>
                    <span className='text-[14px] font-medium text-foreground/80'>
                        Average Sentiment:
                    </span>
                    <span className='text-[14px] font-bold text-[#007047] dark:text-emerald-400'>
                        Positive
                    </span>
                    <TrendingUp className='size-4 text-[#007047] dark:text-emerald-400' />
                </div>

                {/* Momentum Analysis */}
                <div className='mb-8'>
                    <h3 className='text-[16px] font-bold text-foreground mb-3'>
                        Momentum Analysis
                    </h3>
                    <p className='text-[14px] leading-[22px] text-foreground font-normal text-justify'>
                        Apple Inc. (AAPL) continues to show steady upward
                        momentum, supported by strong demand for the iPhone 17
                        lineup, robust growth in its Services segment, and
                        renewed optimism in the broader tech sector. The
                        company’s solid financial discipline, new product
                        launches, and expanding subscription revenues reinforce
                        a positive outlook. While macroeconomic uncertainty and
                        competitive pressures persist, long-term demand trends
                        support a constructive view for Apple’s stock
                        performance.
                    </p>
                </div>

                {/* Positive Highlights */}
                <div className='mb-2'>
                    <h3 className='text-[16px] font-bold text-foreground mb-4'>
                        Positive Highlights
                    </h3>
                    <div className='divide-y divide-border/40'>
                        {positiveHighlights.map((text, index) => (
                            <div key={index} className='group'>
                                <button
                                    onClick={() => togglePositive(index)}
                                    className='w-full flex items-center justify-between py-4 text-left hover:bg-muted/30 transition-colors px-2 rounded-lg -mx-2'>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive/8 dark:bg-positive/20 text-positive dark:text-positive'>
                                            <TrendingUp className='size-3.5' />
                                        </div>
                                        <span className='text-[14px] font-medium text-foreground/90 group-hover:text-foreground transition-colors'>
                                            {text}
                                        </span>
                                    </div>
                                    {expandedPositive === index ? (
                                        <ChevronUp className='size-5 text-foreground' />
                                    ) : (
                                        <ChevronDown className='size-5 text-foreground' />
                                    )}
                                </button>
                                {expandedPositive === index && (
                                    <div className='px-2 pb-4 pt-0 text-[13px] text-foreground/70 leading-relaxed pl-11 animate-in fade-in slide-in-from-top-1 duration-200'>
                                        Detailed AI analysis indicates this is a
                                        key driver for positive sentiment in the
                                        current quarter.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Negative Highlights */}
                <div className='mt-6'>
                    <h3 className='text-[16px] font-bold text-foreground mb-4'>
                        Negative Highlights
                    </h3>
                    <div className='divide-y divide-border/40'>
                        {negativeHighlights.map((text, index) => (
                            <div key={index} className='group'>
                                <button
                                    onClick={() => toggleNegative(index)}
                                    className='w-full flex items-center justify-between py-4 text-left hover:bg-muted/30 transition-colors px-2 rounded-lg -mx-2'>
                                    <div className='flex items-center gap-3'>
                                        <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-negative/8 dark:bg-negative/40 text-negative dark:text-negative'>
                                            <TrendingDown className='size-3.5' />
                                        </div>
                                        <span className='text-[14px] font-medium text-foreground/90 group-hover:text-foreground transition-colors'>
                                            {text}
                                        </span>
                                    </div>
                                    {expandedNegative === index ? (
                                        <ChevronUp className='size-5 text-foreground' />
                                    ) : (
                                        <ChevronDown className='size-5 text-foreground' />
                                    )}
                                </button>
                                {expandedNegative === index && (
                                    <div className='px-2 pb-4 pt-0 text-[13px] text-foreground/70 leading-relaxed pl-11 animate-in fade-in slide-in-from-top-1 duration-200'>
                                        Market analysis suggests monitoring this
                                        factor closely as it presents potential
                                        downside risk.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default News;

