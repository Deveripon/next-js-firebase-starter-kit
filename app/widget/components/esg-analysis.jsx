import { Card, CardContent } from "@/components/ui/card";
import { Sprout } from "lucide-react";

const EsgAnalysis = () => {
    const score = 91;
    const progressData = [
        { label: 'Environmental', value: 73, badge: 'Strong', color: 'bg-[#007047]', left: '73%' },
        { label: 'Social', value: 79, badge: 'Strong', color: 'bg-[#5B63D3]', left: '79%' },
        { label: 'Governance', value: 77, badge: 'Strong', color: 'bg-[#C65D21]', left: '77%' },
    ];

    const years = [
        { label: '2021', value: 72 },
        { label: '2022', value: 64 },
        { label: '2023', value: 80 },
        { label: '2024', value: 84 },
    ];
    const maxVal = 100;

    return (
        <Card className="border-border bg-card shadow-sm">
            <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Sprout className="size-5" />
                    </div>
                    <h2 className="text-[18px] font-bold tracking-tight text-foreground">
                        ESG Analysis
                    </h2>
                </div>

                <p className="text-[13px] text-foreground/80 leading-relaxed mb-6">
                    ESG analysis evaluates how companies manage environmental, social, and governance factors that can affect their long-term performance.
                    It helps investors see beyond financial results — understanding how responsibly a company operates, treats people, and prepares for future risks.
                </p>

                {/* Score Card */}
                <div className="border border-border rounded-xl p-4 flex items-center gap-5 mb-8">
                    <div className="relative h-16 w-16 shrink-0">
                         {/* Circle Background */}
                        <svg className="h-full w-full -rotate-90 text-muted" viewBox="0 0 36 36">
                            <path className="stroke-current stroke-[3] fill-none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        {/* Circle Progress */}
                        <svg className="absolute top-0 left-0 h-full w-full -rotate-90 text-[#007047]" viewBox="0 0 36 36">
                            <path className="stroke-current stroke-[3] fill-none" strokeDasharray="91, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[18px] font-bold text-foreground">
                            {score}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="bg-[#007047] text-white px-2 py-0.5 rounded text-[11px] font-bold uppercase">Leader</span>
                            <span className="text-[13px] font-bold text-foreground">ESG Rating</span>
                        </div>
                        <div className="text-[12px] text-tertiary">
                            Rank in Industry: 24 out of 380
                        </div>
                    </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6 mb-8">
                    {progressData.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {item.label === 'Environmental' && <Sprout className="size-3.5 text-[#007047]" />}
                                    {item.label === 'Social' && <div className="size-3.5 rounded-full border-2 border-[#5B63D3]" />} 
                                    {/* Using simplified icons for now */}
                                    <span className="text-[13px] font-bold text-foreground">{item.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[13px] font-bold text-foreground">{item.value}</span>
                                    <span className="bg-[#EBF9F1] text-[#007047] px-1.5 py-0 rounded text-[10px] font-bold uppercase border border-[#007047]/10">{item.badge}</span>
                                </div>
                            </div>
                            <div className="relative w-full h-2.5 bg-muted rounded-full overflow-visible">
                                <div className={`absolute top-0 left-0 h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                                {/* Thumb */}
                                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white bg-secondary shadow-sm" style={{ left: `${item.value}%`, transform: 'translate(-50%, -50%)' }}></div>
                            </div>
                            <div className="flex justify-between mt-1.5 text-[10px] text-tertiary">
                                <span>Rank in Industry: 24 out of 380</span>
                                <span>Industry Average: 64</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex gap-4 border-b border-border/40 mb-4 overflow-x-auto no-scrollbar">
                    {['OVERVIEW', 'KEY FACTORS', 'PEERS', 'RISK FACTORS'].map((tab, i) => (
                        <button key={tab} className={`pb-2 text-[11px] font-bold tracking-wider ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-tertiary'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="text-[13px] leading-relaxed text-foreground/80 mb-8">
                    In the Chemicals industry, the company stands out for its leadership in environmental, social, and governance (ESG) factors, making it a responsible investment choice for investors who prioritize well-rounded sustainability.
                </div>
                
                <div className="flex justify-center mb-10">
                    <button className="text-[13px] font-bold text-primary hover:underline transition-all">
                        Read Full Analysis
                    </button>
                </div>


                {/* Chart Section */}
                <div>
                     <h3 className="text-[13px] font-bold text-foreground mb-6">ESG Score Progression (2019-2022)</h3>
                     <div className="h-48 w-full flex items-end justify-between gap-4 px-2 relative">
                         {/* Y Axis Grid */}
                         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                             {[100, 75, 50, 25, 0].map(val => (
                                 <div key={val} className="w-full border-t border-border/30 h-0 flex items-center">
                                     <span className="text-[10px] text-tertiary -ml-8 w-6 text-right">{val}</span>
                                 </div>
                             ))}
                         </div>
                         
                         {years.map((year, i) => (
                             <div key={i} className="flex-1 flex flex-col justify-end items-center relative z-10 group h-full pt-6">
                                 <div 
                                    className="w-8 rounded-t-md bg-[#2B6CEF] transition-all group-hover:bg-[#2B6CEF]/80 relative"
                                    style={{ height: `${(year.value / maxVal) * 100}%` }} // Adjusted percentage calculation roughly
                                 >
                                     <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-bold text-foreground">
                                         {year.value}
                                     </span>
                                 </div>
                                 <span className="text-[11px] text-tertiary mt-3">{year.label}</span>
                             </div>
                         ))}
                     </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default EsgAnalysis;
