import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import DataHeader from './data-header';

const FundamentalAnalysis = () => {
    return (
        <Card className='border-border bg-card shadow-sm'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    icon={<FileText className='size-6 text-primary' />}
                    title='Fundamental Analysis'
                />
                <p className='text-[14px] leading-[20px] text-foreground font-normal'>
                    Apple's financial results for Q2 2025, ending June 28, 2025,
                    paint a picture of a company navigating a complex yet
                    opportunity-rich Information Technology landscape. While
                    revenue growth remains solid and operating margins stable,
                    there remain competitive pressures across key product
                    segments against prevailing macroeconomic uncertainties and
                    a structurally low-rate environment which weigh on valuation
                    multiples, particularly for growth. The stock itself is
                    undergoing re‑rating as investors rebalance AI investment
                    boom and substantial capital expenditure toward
                    infrastructure.
                </p>
                <div className='mt-6 flex justify-center'>
                    <button className='text-[14px] font-medium text-primary hover:underline transition-all'>
                        Read Full Description
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default FundamentalAnalysis;

