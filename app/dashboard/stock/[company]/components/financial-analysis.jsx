'use client';
import { Card, CardContent } from '@/components/ui/card';
import { ChartLine, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import DataHeader from './data-header';

const FinancialAnalysis = () => {
    const [activeTab, setActiveTab] = useState('Income Statement');
    const [timeFrame, setTimeFrame] = useState('Annual');
    const [expandedSection, setExpandedSection] = useState(
        'Revenue and Net Income'
    );

    const toggleSection = section => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const tableData = [
        {
            label: 'Total Revenues',
            ttm: '400.37B',
            sep24: '391.03B',
            sep23: '383.29B',
        },
        {
            label: 'Pretax Income Excl.Unusual Items',
            ttm: '127B',
            sep24: '123.49B',
            sep23: '113.74B',
        },
        {
            label: 'Total Assets',
            ttm: '331.23B',
            sep24: '364.98B',
            sep23: '352.58B',
        },
        {
            label: 'Total Liabilities',
            ttm: '264.44B',
            sep24: '308.03B',
            sep23: '290.44B',
        },
        {
            label: 'Cash & Cash Equivalents',
            ttm: '28.16B',
            sep24: '29.94B',
            sep23: '29.97B',
        },
        {
            label: 'Total Common Equity',
            ttm: '66.8B',
            sep24: '56.95B',
            sep23: '62.15B',
        },
        {
            label: 'Book Value Per Share (BVPS)',
            ttm: '4.47',
            sep24: '3.77',
            sep23: '4.0',
        },
        {
            label: 'Net Change in Cash',
            ttm: '-5.76B',
            sep24: '-794M',
            sep23: '5.76B',
        },
        {
            label: 'Capital Expenditure',
            ttm: '-11.07B',
            sep24: '-9.45B',
            sep23: '-10.96B',
        },
    ];

    const accordionSections = [
        'Revenue and Net Income',
        'Asset and Equity Returns',
        'Profitability Ratios',
        'Expense Analysis',
    ];

    return (
        <Card className='border-border bg-card shadow-sm p-0 rounded-2xl'>
            <CardContent className='p-6'>
                <DataHeader
                    icon={<ChartLine className='size-6 text-primary' />}
                    title='Financial Analysis'
                />

                {/* Tabs */}
                <div className='flex gap-6 border-b border-border/40 mb-6 px-1'>
                    {['Income Statement', 'Cash Flow', 'Balance Sheet'].map(
                        tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-[14px] font-medium transition-colors relative ${
                                    activeTab === tab
                                        ? 'text-primary'
                                        : 'text-secondary hover:text-foreground'
                                }`}>
                                {tab}
                                {activeTab === tab && (
                                    <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full' />
                                )}
                            </button>
                        )
                    )}
                </div>

                {/* Rating Row */}
                <div className='flex items-center justify-between mb-6'>
                    <span className='text-[14px] leading-[20px] font-normal text-foreground/80'>
                        Income Statement Rating:
                    </span>
                    <div className='flex items-center gap-3'>
                        <span className='text-[14px] font-bold text-foreground'>
                            90
                            <span className='text-secondary text-[12px] font-normal'>
                                /100
                            </span>
                        </span>
                        <div className='px-3 py-1 rounded-full border border-[#007047] text-[#007047] text-[12px] leading-[16px] font-bold'>
                            Very Strong
                        </div>
                    </div>
                </div>

                {/* Accordion Sections */}
                <div className='space-y-3 mb-8'>
                    {accordionSections.map(section => (
                        <div
                            key={section}
                            className='bg-muted/30 dark:bg-muted/10 rounded-lg overflow-hidden transition-all'>
                            <button
                                onClick={() => toggleSection(section)}
                                className='w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors'>
                                <span className='text-[14px] leading-[20px] font-normal text-foreground'>
                                    {section}
                                </span>
                                {expandedSection === section ? (
                                    <ChevronUp className='size-5 text-foreground' />
                                ) : (
                                    <ChevronDown className='size-5 text-foreground' />
                                )}
                            </button>
                            {expandedSection === section && (
                                <div className='px-4 pb-4 pt-2 text-[14px] leading-[20px] font-light text-foreground text-justify bg-card border-t border-border/40'>
                                    In its latest financial update, Apple stated
                                    total revenues of 95.36B dollar and net
                                    profits of 24.78B dollar. This shows a 5.1%
                                    growth in total revenue and a 4.8% increase
                                    in net income, relative to the prior year’s
                                    similar quarter. The rise in both total
                                    revenue and net income suggests a positive
                                    trend in the company’s financial health.
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Toggle & Table */}
                <div>
                    <div className='flex justify-end mb-4'>
                        <div className='inline-flex rounded-full bg-muted p-1 gap-1'>
                            {['Annual', 'Quarterly'].map(tf => (
                                <button
                                    key={tf}
                                    onClick={() => setTimeFrame(tf)}
                                    className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                                        timeFrame === tf
                                            ? 'bg-primary text-primary-foreground shadow-sm'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}>
                                    {tf}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='border border-border/40 rounded-xl overflow-hidden'>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-[13px]'>
                                <thead>
                                    <tr className='bg-background border-b border-border/40'>
                                        <th className='py-4 pl-4 text-left text-secondary font-medium text-[12px] w-[35%]'>
                                            Breakdown
                                        </th>
                                        <th className='py-4 text-right text-secondary font-medium text-[12px] w-[15%]'>
                                            TTM
                                        </th>
                                        <th className='py-4 text-right text-secondary font-medium text-[12px] w-[25%]'>
                                            Sep 2024
                                        </th>
                                        <th className='py-4 pr-4 text-right text-secondary font-medium text-[12px] w-[25%]'>
                                            Sep 2023
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-border/40 bg-card'>
                                    {tableData.map((row, i) => (
                                        <tr
                                            key={i}
                                            className='hover:bg-muted/20 transition-colors'>
                                            <td className='py-4 pl-4 text-foreground font-medium'>
                                                {row.label}
                                            </td>
                                            <td className='py-4 text-right text-foreground font-medium'>
                                                {row.ttm}
                                            </td>
                                            <td className='py-4 text-right text-foreground/80'>
                                                {row.sep24}
                                            </td>
                                            <td className='py-4 pr-4 text-right text-foreground/80'>
                                                {row.sep23}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Scroll Indicator / Shadow (optional, but mimics screenshot truncation look) */}
                        <div className='h-1.5 w-[60px] bg-border/40 rounded-full mx-4 mb-3 mt-2' />
                    </div>

                    <div className='mt-3'>
                        <p className='text-[11px] text-secondary'>
                            * All values are in USD.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FinancialAnalysis;

