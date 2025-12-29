'use client';

import AlternativeFactors from '@/app/dashboard/widget/components/alternative-factors';
import CompanyDescription from '@/app/dashboard/widget/components/company-description';
import CompanyProfile from '@/app/dashboard/widget/components/company-profile';
import DiscoverMore from '@/app/dashboard/widget/components/discover-more';
import EarningsSummary from '@/app/dashboard/widget/components/earnings-summary';
import EsgAnalysis from '@/app/dashboard/widget/components/esg-analysis';
import FinancialAnalysis from '@/app/dashboard/widget/components/financial-analysis';
import FundamentalAnalysis from '@/app/dashboard/widget/components/fundamental-analysis';
import FundamentalRating from '@/app/dashboard/widget/components/fundamental-rating';
import InvestmentRationale from '@/app/dashboard/widget/components/investment-rationale';
import KeyDevelopments from '@/app/dashboard/widget/components/key-developments';
import MarketEvents from '@/app/dashboard/widget/components/market-events';
import News from '@/app/dashboard/widget/components/news';
import PeerComparison from '@/app/dashboard/widget/components/peer-comparison';
import StockOverview from '@/app/dashboard/widget/components/stock-overview';
import TechnicalAnalysis from '@/app/dashboard/widget/components/technical-analysis';
import WidgetActionBar from '@/app/dashboard/widget/components/widget-actionbar';
import WidgetHeader from '@/app/dashboard/widget/components/widget-header';
import { Roboto } from 'next/font/google';
import WidgetFooter from './components/widget-footer';
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export default function WidgetPage() {
    return (
        <div
            className={`${roboto.className} min-h-screen admin-dashboard bg-background text-foreground antialiased selection:bg-primary/20`}>
            {/* Top Navigation */}
            <WidgetHeader />
            {/* Sticky Action Bar */}
            <div className='container mx-auto px-6 sm:px-8 lg:px-32'>
                <WidgetActionBar />
            </div>

            {/* Main Content Area */}
            <main className='pb-20 pt-8'>
                <div className='container mx-auto px-6 sm:px-8 lg:px-32 space-y-8'>
                    {/* Level 1: Primary Stock Overview */}
                    <StockOverview />

                    <div className='w-full p-0 m-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
                        {/* Left Column (Approx 50% or 6 cols) */}
                        <div className='lg:col-span-6 space-y-8'>
                            <FundamentalRating />
                            <InvestmentRationale />
                            <AlternativeFactors />
                            <EarningsSummary />
                            <FundamentalAnalysis />
                            <FinancialAnalysis />
                            <News />
                        </div>

                        {/* Right Column (Approx 50% or 6 cols) */}
                        <div className='lg:col-span-6 space-y-8'>
                            <CompanyProfile />
                            <CompanyDescription />
                            <MarketEvents />
                            <PeerComparison />
                            <KeyDevelopments />
                            <TechnicalAnalysis />
                            <EsgAnalysis />
                        </div>
                    </div>

                    <DiscoverMore />

                    <WidgetFooter />
                </div>
            </main>
        </div>
    );
}

