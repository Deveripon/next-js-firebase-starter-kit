import { Card, CardContent } from '@/components/ui/card';
import { NotebookText } from 'lucide-react';
import DataHeader from './data-header';

const CompanyDescription = () => {
    return (
        <Card className='border-border bg-card shadow-sm'>
            <CardContent className='p-5 sm:p-6'>
                <DataHeader
                    title='Company Description'
                    icon={<NotebookText className='size-6 text-primary' />}
                />

                <div className='flex flex-wrap gap-2 mb-4'>
                    {['Tech Stock', 'High Dividend', 'Mega Large Cap'].map(
                        tag => (
                            <span
                                key={tag}
                                className='px-3 py-1 bg-muted/80 rounded-full text-[12px] font-medium text-secondary'>
                                {tag}
                            </span>
                        )
                    )}
                </div>

                <p className='text-[13px] leading-relaxed text-foreground/80 mb-4'>
                    Apple Inc. designs, manufactures, and markets smartphones,
                    personal computers, tablets, wearables, and accessories
                    worldwide. The company offers iPhone, a line of smartphones;
                    Mac, a line of personal computers; iPad, a line of
                    multi-purpose tablets; and wearables, home, and accessories
                    comprising AirPods, Apple TV, Apple Watch, Beats products,
                    and HomePod. It also provides AppleCare support and cloud
                    services; and operates various platforms, including the App
                    Store that allow customers to discover and download
                    applications and digital content, such as books, music,
                    video, games, and podcasts, as well as advertising services
                    include third-party licensing arrangements and its own
                    advertising p...
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

export default CompanyDescription;

