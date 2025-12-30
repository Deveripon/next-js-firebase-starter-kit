import AlternativeFactors from '@/app/dashboard/stock/[company]/components/alternative-factors';
import CompanyDescription from '@/app/dashboard/stock/[company]/components/company-description';
import CompanyProfile from '@/app/dashboard/stock/[company]/components/company-profile';
import DiscoverMore from '@/app/dashboard/stock/[company]/components/discover-more';
import EarningsSummary from '@/app/dashboard/stock/[company]/components/earnings-summary';
import EsgAnalysis from '@/app/dashboard/stock/[company]/components/esg-analysis';
import FinancialAnalysis from '@/app/dashboard/stock/[company]/components/financial-analysis';
import FundamentalAnalysis from '@/app/dashboard/stock/[company]/components/fundamental-analysis';
import FundamentalRating from '@/app/dashboard/stock/[company]/components/fundamental-rating';
import InvestmentRationale from '@/app/dashboard/stock/[company]/components/investment-rationale';
import KeyDevelopments from '@/app/dashboard/stock/[company]/components/key-developments';
import MarketEvents from '@/app/dashboard/stock/[company]/components/market-events';
import News from '@/app/dashboard/stock/[company]/components/news';
import PeerComparison from '@/app/dashboard/stock/[company]/components/peer-comparison';
import StockOverview from '@/app/dashboard/stock/[company]/components/stock-overview';
import TechnicalAnalysis from '@/app/dashboard/stock/[company]/components/technical-analysis';
import WidgetActionBar from '@/app/dashboard/stock/[company]/components/widget-actionbar';
import { Roboto } from 'next/font/google';
import WidgetFooter from './components/widget-footer';
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export default async function WidgetPage({ params }) {
    const { company } = await params;
    return (
        <div
            className={`${roboto.className} min-h-screen admin-dashboard bg-background text-foreground antialiased selection:bg-primary/20`}>
            {/* Top Navigation */}
            {/*    <WidgetHeader /> */}
            {/* Sticky Action Bar */}
            <div className='container mx-auto px-6 sm:px-8 lg:px-20'>
                <WidgetActionBar company={company} />
            </div>

            {/* Main Content Area */}
            <main className='pb-20 pt-8'>
                <div className='container mx-auto px-6 sm:px-8 lg:px-20 space-y-8'>
                    {/* Level 1: Primary Stock Overview */}
                    <StockOverview company={company} />

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

