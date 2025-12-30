import { cn } from '@/lib/utils';

const DataHeader = ({ icon = null, title, className, props }) => {
    return (
        <div className={cn(`flex items-center gap-3 mb-6`, className)} {...props}>
            {icon && icon}
            {title && (
                <h2 className='text-[20px] font-medium tracking-tight text-foreground'>
                    {title}
                </h2>
            )}
        </div>
    );
};

export default DataHeader;

