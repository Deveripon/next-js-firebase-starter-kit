import { Card, CardContent } from "@/components/ui/card";
import { ChartLine, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FinancialAnalysis = () => {
    const [activeTab, setActiveTab] = useState('Income Statement');
    const [timeFrame, setTimeFrame] = useState('Annual');
    const [expandedSections, setExpandedSections] = useState({
        'Revenue and Net Income': true,
        'Asset and Equity Returns': false,
        'Profitability Ratios': false,
        'Expense Analysis': false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const tableData = [
        { label: 'Total Revenues', ttm: '400.37B', sep24: '391.03B', sep23: '383.29B' },
        { label: 'Pretax Income Excl.Unusual Items', ttm: '127B', sep24: '123.49B', sep23: '113.74B' },
        { label: 'Total Assets', ttm: '331.23B', sep24: '364.98B', sep23: '352.58B' },
        { label: 'Total Liabilities', ttm: '264.44B', sep24: '308.03B', sep23: '290.44B' },
        { label: 'Cash & Cash Equivalents', ttm: '28.16B', sep24: '29.94B', sep23: '29.97B' },
        { label: 'Total Common Equity', ttm: '66.8B', sep24: '56.95B', sep23: '62.14B' },
        { label: 'Book Value Per Share (BVPS)', ttm: '4.47', sep24: '3.77', sep23: '3.91' },
    ];

    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ChartLine className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        Financial Analysis
                    </h2>
                </div>

                <div className="flex gap-6 border-b border-border/40 mb-6 px-1">
                    {['Income Statement', 'Cash Flow', 'Balance Sheet'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-[14px] font-medium transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-secondary hover:text-foreground'}`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-[14px] font-medium text-foreground">Income Statement Rating:</span>
                        <div className="flex items-center gap-2">
                             <span className="text-[16px] font-bold text-foreground">90<span className="text-secondary text-[12px]">/100</span></span>
                             <span className="px-2.5 py-0.5 rounded-full border border-[#007047] text-[#007047] text-[11px] font-bold">Very Strong</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mb-8">
                    {Object.keys(expandedSections).map(section => (
                        <div key={section} className="bg-muted/30 rounded-lg overflow-hidden border border-border/40 transition-all">
                             <button 
                                onClick={() => toggleSection(section)}
                                className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50"
                             >
                                <span className="text-[13px] font-bold text-foreground">{section}</span>
                                {expandedSections[section] ? <ChevronUp className="size-4 text-secondary" /> : <ChevronDown className="size-4 text-secondary" />}
                             </button>
                             {expandedSections[section] && (
                                 <div className="px-3 pb-3 pt-0 text-[13px] text-foreground/80 leading-relaxed border-t border-border/40 bg-card p-3">
                                     In its latest financial update, Apple stated total revenues of 95.36B dollar and net profits of 24.78B dollar. This shows a 5.1% growth in total revenue and a 4.8% increase in net income, relative to the prior year's similar quarter. The rise in both total revenue and net income suggests a positive trend in the company's financial health.
                                 </div>
                             )}
                        </div>
                    ))}
                </div>

                {/* Table Section */}
                <div>
                    <div className="flex justify-end mb-4 gap-2">
                         <div className="inline-flex rounded-lg bg-muted p-0.5 text-[12px] font-medium text-secondary">
                            <button 
                                onClick={() => setTimeFrame('Annual')}
                                className={`px-3 py-1 rounded-md transition-all ${timeFrame === 'Annual' ? 'bg-[#2B6CEF] text-white shadow-sm' : 'hover:text-foreground'}`}
                            >
                                Annual
                            </button>
                            <button 
                                onClick={() => setTimeFrame('Quarterly')}
                                className={`px-3 py-1 rounded-md transition-all ${timeFrame === 'Quarterly' ? 'bg-[#2B6CEF] text-white shadow-sm' : 'hover:text-foreground'}`}
                            >
                                Quarterly
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                             <thead>
                                 <tr className="border-b border-border">
                                     <th className="py-3 text-left text-secondary font-medium text-[11px] w-[40%]">Breakdown</th>
                                     <th className="py-3 text-right text-secondary font-medium text-[11px] w-[20%]">TTM</th>
                                     <th className="py-3 text-right text-secondary font-medium text-[11px] w-[20%]">Sep 2024</th>
                                     <th className="py-3 text-right text-secondary font-medium text-[11px] w-[20%]">Sep 2023</th>
                                 </tr>
                             </thead>
                             <tbody className="divide-y divide-border/40">
                                 {tableData.map((row, i) => (
                                     <tr key={i} className="hover:bg-muted/20">
                                         <td className="py-3 text-foreground font-medium">{row.label}</td>
                                         <td className="py-3 text-right text-foreground font-bold">{row.ttm}</td>
                                         <td className="py-3 text-right text-foreground/80">{row.sep24}</td>
                                         <td className="py-3 text-right text-foreground/80">{row.sep23}</td>
                                     </tr>
                                 ))}
                             </tbody>
                        </table>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default FinancialAnalysis;
