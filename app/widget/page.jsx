'use client';

import StockOverview from '@/app/widget/components/stock-overview';
import WidgetActionBar from '@/app/widget/components/widget-actionbar';
import WidgetHeader from '@/app/widget/components/widget-header';
import FundamentalRating from '@/app/widget/components/fundamental-rating';
import InvestmentRationale from '@/app/widget/components/investment-rationale';
import AlternativeFactors from '@/app/widget/components/alternative-factors';
import EarningsSummary from '@/app/widget/components/earnings-summary';
import CompanyProfile from '@/app/widget/components/company-profile';
import CompanyDescription from '@/app/widget/components/company-description';
import MarketEvents from '@/app/widget/components/market-events';
import FundamentalAnalysis from '@/app/widget/components/fundamental-analysis';
import FinancialAnalysis from '@/app/widget/components/financial-analysis';
import PeerComparison from '@/app/widget/components/peer-comparison';
import KeyDevelopments from '@/app/widget/components/key-developments';
import TechnicalAnalysis from '@/app/widget/components/technical-analysis';
import GuidanceCard from '@/app/widget/components/guidance-card';
import EsgAnalysis from '@/app/widget/components/esg-analysis';
import DiscoverMore from '@/app/widget/components/discover-more';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export default function WidgetPage() {
    return (
        <div
            className={`${roboto.className} px-3 min-h-screen admin-dashboard bg-background text-foreground antialiased selection:bg-primary/20`}>
            {/* Top Navigation */}
            <WidgetHeader />
            {/* Sticky Action Bar */}
            <div className='container mx-auto px-6 sm:px-8 lg:px-10'>
                <WidgetActionBar />
            </div>

            {/* Main Content Area */}
            <main className='pb-20 pt-8'>
                <div className='container mx-auto px-6 sm:px-8 lg:px-32 space-y-8'>
                    {/* Level 1: Primary Stock Overview */}
                    <StockOverview />

                    <GuidanceCard />

                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
                        {/* Left Column (Approx 60% or 7 cols) */}
                        <div className='lg:col-span-7 space-y-8'>
                            <FundamentalAnalysis />
                            <FinancialAnalysis />
                            <FundamentalRating />
                            <InvestmentRationale />
                            <AlternativeFactors />
                            <EarningsSummary />
                        </div>

                        {/* Right Column (Approx 40% or 5 cols) */}
                        <div className='lg:col-span-5 space-y-8'>
                            <PeerComparison />
                            <EsgAnalysis />
                            <KeyDevelopments />
                            <TechnicalAnalysis />
                            <CompanyProfile />
                            <CompanyDescription />
                            <MarketEvents />
                        </div>
                    </div>
                    
                    <DiscoverMore />

                    <div className="pb-8 pt-4 border-t border-border/40 text-[11px] text-tertiary leading-relaxed text-justify">
                        <p>
                            View Bridgewise's stock price target and recommendations history by <span className="text-primary underline cursor-pointer">clicking here</span>.
                        </p>
                        <p className="mt-2 text-justify opacity-80">
                            The analyses published within the scope of this service were prepared on behalf of Bridgewise Analytics Ltd. The information concluded in the analysis is intended for general guidance purposes only. Under no circumstances, and regardless of the circumstances, is the information adjusted to a specific factor or variable related to the identity of the report reader or intended to be used, construed or considered as financial or personal investment advice or offer to sell or buy any securities mentioned in this report or other form of a financial asset, and in any case, it is recommended to consult with professionals and tax advisors in these contexts. Bridgewise Analytics Ltd and/or its affiliates and/or anyone on its behalf are not responsible for the use of the information provided and disclaim any responsibility for any claims and/or damages that may be caused as a result of a mistake and/or use of the information provided in this document. while the reader declares that any action he takes following the reading of the analyses or using the service was done at his own discretion and in accordance with his own decision. Last update: 07/04/2025. <span className="text-primary underline cursor-pointer">For full disclosure click here</span>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
