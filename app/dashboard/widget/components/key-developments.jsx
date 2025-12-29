import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    ChevronDown,
    ChevronUp,
    FileText,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { useState } from 'react';
import DataHeader from './data-header';

const KeyDevelopments = () => {
    const [activeTab, setActiveTab] = useState('All Developments');
    const [expandedItem, setExpandedItem] = useState(0);

    const developments = [
        {
            title: '3M Volume',
            date: '1 day ago',
            tag: 'Market Data',
            icon: TrendingUp,
            content:
                'Trading volume exceeded 30 million shares, indicating high investor interest following the latest product announcement.',
        },
        {
            title: 'Asset Turnover',
            date: '1 day ago',
            tag: 'Fundamental Data',
            icon: TrendingUp,
            content:
                'Asset turnover ratio improved to 0.85, showing better efficiency in using assets to generate revenue.',
        },
        {
            title: 'D/E Ratio',
            date: '2 days ago',
            tag: 'Fundamental Data',
            icon: TrendingDown,
            content:
                'Debt-to-Equity ratio remains stable at 1.45, reflecting a balanced capital structure.',
        },
        {
            title: 'EBITDA Margin',
            date: '3 day ago',
            tag: 'Fundamental Data',
            icon: TrendingUp,
            content:
                'EBITDA margin expanded to 32.5%, driven by lower operational costs and strong services revenue.',
        },
        {
            title: 'FCF/Share',
            date: '3 day ago',
            tag: 'Fundamental Data',
            icon: TrendingUp,
            content:
                'Free Cash Flow per share increased to $6.20, supporting continued share buybacks and dividends.',
        },
        {
            title: 'High Market Liquidity',
            date: '4 days ago',
            tag: 'Market Data',
            icon: TrendingUp,
            content:
                'The stock maintains high liquidity with tight bid-ask spreads, making it easy for large institutions to trade.',
        },
    ];

    return (
        <Card className='border-border bg-card shadow-sm h-full max-h-[700px] flex flex-col'>
            <CardContent className='p-5 sm:p-6 flex-1 flex flex-col min-h-0'>
                <DataHeader title='Key Developments' />

                <div className='flex gap-4 overflow-x-auto pb-2 mb-2 no-scrollbar '>
                    {[
                        { label: 'All Developments', icon: null },
                        { label: 'Corporate Event', icon: Calendar },
                        { label: 'Fundamental Data', icon: FileText },
                        { label: 'Market Data', icon: TrendingUp },
                    ].map(tab => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`flex items-center gap-1.5 whitespace-nowrap pb-2 text-[14px] font-normal border-b-2 transition-all ${
                                activeTab === tab.label
                                    ? 'border-primary text-foreground'
                                    : 'border-transparent text-tertiary hover:text-secondary'
                            }`}>
                            {tab.icon && <tab.icon className='size-3.5' />}
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className='overflow-y-hidden flex-1 pr-1 space-y-3 mt-4'>
                    {developments.map((item, index) => (
                        <div
                            key={index}
                            className='bg-background border border-border/50 rounded-[8px] overflow-hidden'>
                            <button
                                onClick={() =>
                                    setExpandedItem(
                                        expandedItem === index ? -1 : index
                                    )
                                }
                                className='w-full flex items-center justify-between p-3.5 text-left hover:bg-muted/30 transition-colors'>
                                <div className='flex items-center gap-3'>
                                    <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-positive/8 text-positive'>
                                        <item.icon className='size-3.5' />
                                    </div>
                                    <div>
                                        <div className='text-[14px] font-medium text-foreground'>
                                            {item.title}
                                        </div>
                                        <div className='flex items-center gap-2 text-[12px] text-tertiary mt-0.5'>
                                            <span>{item.date}</span>
                                            <span className='w-0.5 h-0.5 rounded-full bg-border' />
                                            <span>{item.tag}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-secondary'>
                                    {expandedItem === index ? (
                                        <ChevronUp className='size-5' />
                                    ) : (
                                        <ChevronDown className='size-5' />
                                    )}
                                </div>
                            </button>
                            {expandedItem === index && (
                                <div className='px-3.5 pb-3.5 pt-0 text-[12px] text-foreground/80 leading-relaxed border-t border-dashed border-border/40 bg-card/50 p-3 mx-1 mt-1 rounded-b-lg'>
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-center gap-3 pt-4 mt-auto '>
                    <button className='p-2 rounded-lg hover:bg-muted text-secondary hover:text-foreground transition-colors'>
                        <ArrowLeft className='size-4' />
                    </button>
                    <span className='text-[14px] font-medium text-foreground'>
                        1/3
                    </span>
                    <button className='p-2 rounded-lg hover:bg-muted text-secondary hover:text-foreground transition-colors'>
                        <ArrowRight className='size-4' />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default KeyDevelopments;

