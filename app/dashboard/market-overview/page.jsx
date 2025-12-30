import DiscoverStocks from './components/discover-stocks';
import ThematicStockCards from './components/thematic-stock-cards';

const MarketOverviewPage = () => {
    return (
        <div className='min-h-screen bg-background'>
            <main className='py-4 space-y-8'>
                <DiscoverStocks />
                <ThematicStockCards />
            </main>
        </div>
    );
};

export default MarketOverviewPage;

