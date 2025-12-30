'use client';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Target02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    ArrowDown,
    ArrowUp,
    Globe,
    PieChart,
    Scale,
    Sparkles,
} from 'lucide-react';
import DataHeader from '../../stock/[company]/components/data-header';
import {
    AbbVieLogo,
    AdobeLogo,
    AlphabetLogo,
    AmazonLogo,
    AppleLogo,
    ChinaMobileLogo,
    ExorLogo,
    JobyLogo,
    McDonaldsLogo,
    MetaLogo,
    MicrosoftLogo,
    MoutaiLogo,
    NvidiaLogo,
    PhilipMorrisLogo,
    TubizeLogo,
} from '../../stock/[company]/components/stock-logos';

const StockRow = ({ stock }) => {
    const isPositive = stock.change.startsWith('+');

    // Helper to render logo
    const renderLogo = () => {
        return (
            <div className='scale-75 origin-left shrink-0'>{stock.logo}</div>
        );
    };

    const getBadgeStyle = rec => {
        switch (rec) {
            case 'OUTPERFORM':
                return 'bg-very-positive text-white';
            case 'HOLD':
                return 'bg-muted text-muted-foreground';
            case 'SELL':
                return 'bg-negative text-white';
            case 'UNDERPERFORM':
                return 'bg-very-negative text-white';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className='flex items-center justify-between py-2.5 border-b border-border/40 last:border-0'>
            <div className='flex items-center gap-2.5'>
                {renderLogo()}
                <div className='flex flex-col gap-0'>
                    <div className='flex items-center gap-1.5'>
                        <span className='text-[14px] font-normal text-foreground'>
                            {stock.sym}
                        </span>
                        <span
                            className={cn(
                                'text-[12px] font-medium px-1.5 py-0 rounded uppercase tracking-wider',
                                getBadgeStyle(stock.rec)
                            )}>
                            {stock.rec}
                        </span>
                    </div>
                    <span className='text-[12px] text-tertiary font-medium line-clamp-1'>
                        {stock.name}
                    </span>
                </div>
            </div>
            <div className='flex flex-col items-end gap-0'>
                <div className='flex items-center gap-1'>
                    <HugeiconsIcon
                        icon={Target02Icon}
                        className='size-3.5 text-secondary'
                    />
                    <span className='text-[14px] font-medium text-foreground'>
                        {stock.price}
                    </span>
                </div>
                <div
                    className={cn(
                        'flex items-center gap-0.5 text-[12px] font-medium',
                        isPositive ? 'text-positive' : 'text-negative'
                    )}>
                    {isPositive ? (
                        <ArrowUp className='size-2' />
                    ) : (
                        <ArrowDown className='size-2' />
                    )}
                    {stock.change}
                </div>
            </div>
        </div>
    );
};

const ThematicStockCards = () => {
    const categories = [
        {
            title: 'Negligible Debt',
            icon: <Scale className='size-5 text-primary' />,
            subtitle:
                'Companies with low Debt-to-Equity ratios, indicating strong financial health.',
            stocks: [
                {
                    sym: 'ABBV',
                    name: 'AbbVie',
                    rec: 'HOLD',
                    price: '$210.00',
                    change: '-8.69%',
                    logo: <AbbVieLogo />,
                },
                {
                    sym: '600519',
                    name: 'Kweichow Moutai',
                    rec: 'HOLD',
                    price: 'CN¥1,500.00',
                    change: '+6.99%',
                    logo: <MoutaiLogo />,
                },
                {
                    sym: 'PM',
                    name: 'Philip Morris International',
                    rec: 'OUTPERFORM',
                    price: '$165.00',
                    change: '+2.45%',
                    logo: <PhilipMorrisLogo />,
                },
                {
                    sym: '941',
                    name: 'China Mobile',
                    rec: 'UNDERPERFORM',
                    price: 'HK$84.00',
                    change: '+2.69%',
                    logo: <ChinaMobileLogo />,
                },
                {
                    sym: 'MCD',
                    name: "McDonald's",
                    rec: 'OUTPERFORM',
                    price: '$330.00',
                    change: '+6.22%',
                    logo: <McDonaldsLogo />,
                },
            ],
        },
        {
            title: 'Dividend Generous',
            icon: <PieChart className='size-5 text-primary' />,
            subtitle:
                'Companies offering high dividend yields, making them attractive to income investors.',
            stocks: [
                {
                    sym: 'NVDA',
                    name: 'Nvidia',
                    rec: 'HOLD',
                    price: '$185.00',
                    change: '-2.90%',
                    logo: <NvidiaLogo />,
                },
                {
                    sym: 'AAPL',
                    name: 'Apple',
                    rec: 'HOLD',
                    price: '$280.00',
                    change: '+2.41%',
                    logo: <AppleLogo />,
                },
                {
                    sym: 'GOOGL',
                    name: 'Alphabet',
                    rec: 'OUTPERFORM',
                    price: '$295.00',
                    change: '-5.90%',
                    logo: <AlphabetLogo />,
                },
                {
                    sym: 'MSFT',
                    name: 'Microsoft',
                    rec: 'HOLD',
                    price: '$545.00',
                    change: '+11.75%',
                    logo: <MicrosoftLogo />,
                },
                {
                    sym: 'META',
                    name: 'Meta Platforms',
                    rec: 'SELL',
                    price: '$590.00',
                    change: '-11.05%',
                    logo: <MetaLogo />,
                },
            ],
        },
        {
            title: 'Global Leaders',
            icon: <Globe className='size-5 text-primary' />,
            subtitle:
                'Leading companies from developed markets that dominate their industry, exhibiting strong global market presence and influence.',
            stocks: [
                {
                    sym: 'ADBE',
                    name: 'Adobe',
                    rec: 'HOLD',
                    price: '$380.00',
                    change: '+7.41%',
                    logo: <AdobeLogo />,
                },
                {
                    sym: 'EXO',
                    name: 'Exor',
                    rec: 'SELL',
                    price: '€75.50',
                    change: '+4.28%',
                    logo: <ExorLogo />,
                },
                {
                    sym: 'JOBY',
                    name: 'Joby Aviation',
                    rec: 'SELL',
                    price: '$6.15',
                    change: '-55.69%',
                    logo: <JobyLogo />,
                },
                {
                    sym: 'TUB',
                    name: 'Financière de Tubize',
                    rec: 'HOLD',
                    price: '€150.00',
                    change: '-28.23%',
                    logo: <TubizeLogo />,
                },
            ],
        },
        {
            title: 'AI-Stocks',
            icon: <Sparkles className='size-5 text-primary' />,
            subtitle:
                'Companies that develop, utilize, or benefit from artificial intelligence technologies',
            stocks: [
                {
                    sym: 'NVDA',
                    name: 'Nvidia',
                    rec: 'HOLD',
                    price: '$185.00',
                    change: '-2.90%',
                    logo: <NvidiaLogo />,
                },
                {
                    sym: 'AAPL',
                    name: 'Apple',
                    rec: 'HOLD',
                    price: '$280.00',
                    change: '+2.41%',
                    logo: <AppleLogo />,
                },
                {
                    sym: 'GOOGL',
                    name: 'Alphabet',
                    rec: 'OUTPERFORM',
                    price: '$295.00',
                    change: '-5.90%',
                    logo: <AlphabetLogo />,
                },
                {
                    sym: 'MSFT',
                    name: 'Microsoft',
                    rec: 'HOLD',
                    price: '$545.00',
                    change: '+11.75%',
                    logo: <MicrosoftLogo />,
                },
                {
                    sym: 'AMZN',
                    name: 'Amazon',
                    rec: 'HOLD',
                    price: '$225.00',
                    change: '-3.23%',
                    logo: <AmazonLogo />,
                },
            ],
        },
    ];

    return (
        <div className='container mx-auto px-6 lg:px-20 mb-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {categories.map((cat, idx) => (
                    <Card
                        key={idx}
                        className='border-border/60 shadow-sm rounded-[20px] overflow-hidden'>
                        <CardContent className='p-5'>
                            <div className='mb-4'>
                                <DataHeader
                                    title={cat.title}
                                    className='mb-2 gap-2.5'
                                />
                                <p className='text-[14px] text-tertiary font-normal leading-relaxed max-w-[95%]'>
                                    {cat.subtitle}
                                </p>
                            </div>
                            <div className=''>
                                {cat.stocks.map((stock, sIdx) => (
                                    <StockRow key={sIdx} stock={stock} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ThematicStockCards;

