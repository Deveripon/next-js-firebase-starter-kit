'use client';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, TrendingUp, Volume2 } from 'lucide-react';
import { useState } from 'react';
import DataHeader from './data-header';

const EarningsSummary = () => {
    const [activeTab, setActiveTab] = useState('highlights');
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleExpand = index => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const highlights = [
        'June quarter revenue record of $94 billion, up 10%.',
        'EPS set a June quarter record of $1.57, up 12%.',
        'iPhone revenue grew 13% year-over-year, setting record.',
        'Mac revenue increased by 15% year-over-year.',
        'Services revenue reached an all-time record, up 13%.',
        'Operating cash flow was strong at $27.9 billion.',
    ];

    return (
        <Card className='border-border bg-card shadow-sm p-0 rounded-2xl'>
            <CardContent className='p-6'>
                <DataHeader
                    icon={<Volume2 className='size-6 text-primary' />}
                    title={
                        <span>
                            Earnings Call Summary{' '}
                            <span className='font-normal text-secondary'>
                                (Q3-2024)
                            </span>
                        </span>
                    }
                />

                {/* Tabs */}
                <div className='flex items-center gap-3 mb-6'>
                    <button
                        onClick={() => setActiveTab('highlights')}
                        className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all ${
                            activeTab === 'highlights'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}>
                        Highlights
                    </button>
                    <button
                        onClick={() => setActiveTab('lowlights')}
                        className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all ${
                            activeTab === 'lowlights'
                                ? 'bg-primary text-primary-foreground shadow-sm'
                                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}>
                        Lowlights
                    </button>
                </div>

                {/* List */}
                <div className='space-y-3 mb-8'>
                    {highlights.map((text, index) => (
                        <div
                            key={index}
                            className='bg-[#EFF8F3] dark:bg-emerald-950/20 rounded-xl overflow-hidden transition-all duration-200'>
                            <button
                                onClick={() => toggleExpand(index)}
                                className='w-full flex items-center justify-between p-4 text-left group'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-very-positive/8 dark:bg-very-positive/40 text-very-positive dark:text-very-positive'>
                                        <TrendingUp className='size-3.5' />
                                    </div>
                                    <span className='text-[14px] font-medium text-foreground/90 group-hover:text-foreground transition-colors'>
                                        {text}
                                    </span>
                                </div>
                                {expandedItem === index ? (
                                    <ChevronUp className='size-5 text-foreground' />
                                ) : (
                                    <ChevronDown className='size-5 text-foreground' />
                                )}
                            </button>
                            {expandedItem === index && (
                                <div className='px-4 pb-4 pt-0 text-[13px] text-foreground/70 leading-relaxed pl-13 animate-in fade-in slide-in-from-top-1 duration-200'>
                                    Brief details about &quot;{text}&quot;
                                    provided during the call, emphasizing key
                                    growth drivers and efficient execution.
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Guidance Section */}
                <div className='bg-background dark:bg-background rounded-[8px] p-5 border border-border/50 dark:border-border/30'>
                    <h3 className='text-[14px] leading-[20px] font-medium text-foreground mb-2'>
                        Q1-2025: Guidance
                    </h3>
                    <p className='text-[14px] leading-[20px] font-light text-foreground text-justify'>
                        Apple expects its September quarter total company
                        revenue to grow mid- to high single digits
                        year-over-year. The company anticipates Services revenue
                        to grow at a year-over- year rate similar to what was
                        reported in the June quarter. Apple projects gross
                        margin to be between 46% and 47%, which includes the
                        estimated impact of $1.1 billion in tariff- related
                        costs. The company expects operating expenses to be
                        between $15.6 billion and $15.8 billion. Apple estimates
                        OI&E to be around negative $25 million, excluding any
                        potential impact from the mark-to-market of minority
                        investments, and the tax rate to be around 17%.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

export default EarningsSummary;

