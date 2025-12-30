import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export function SelectAnalysisType({ isSidebar = false }) {
    return (
        <Select defaultValue='stock-analysis'>
            <SelectTrigger className='w-[180px] bg-transparent border-0'>
                <SelectValue placeholder='Select Analysis Type' />
            </SelectTrigger>
            <SelectContent className='text-foreground bg-background rounded-lg border-border'>
                <SelectGroup>
                    <SelectLabel>Analysis Type</SelectLabel>
                    <SelectItem value='stock-analysis'>
                        Stock Analysis
                    </SelectItem>
                    <SelectItem value='fund-analysis'>Fund Analysis</SelectItem>
                    <SelectItem value='theme-analysis'>
                        Theme Analysis
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}

