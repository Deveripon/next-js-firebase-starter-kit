import React from 'react';

const WidgetFooter = () => {
    return (
        <div className='pb-12 pt-8 border-t border-border/40 text-[12px] leading-[18px] text-secondary font-normal text-justify'>
            <p>
                View Bridgewise&apos;s stock price target and recommendations
                history by{' '}
                <span className='text-[#2B6CEF] underline cursor-pointer hover:text-primary transition-colors'>
                    clicking here
                </span>
                .
            </p>
            <p className='mt-3 text-justify opacity-70 leading-[18px]'>
                The analyses published within the scope of this service were
                prepared on behalf of Bridgewise Analytics Ltd. The information
                concluded in the analysis is intended for general guidance
                purposes only. Under no circumstances, and regardless of the
                circumstances, is the information adjusted to a specific factor
                or variable related to the identity of the report reader or
                intended to be used, construed or considered as financial or
                personal investment advice or offer to sell or buy any
                securities mentioned in this report or other form of a financial
                asset, and in any case, it is recommended to consult with
                professionals and tax advisors in these contexts. Bridgewise
                Analytics Ltd and/or its affiliates and/or anyone on its behalf
                are not responsible for the use of the information provided and
                disclaim any responsibility for any claims and/or damages that
                may be caused as a result of a mistake and/or use of the
                information provided in this document. while the reader declares
                that any action he takes following the reading of the analyses
                or using the service was done at his own discretion and in
                accordance with his own decision. Date of analysis 29/05/2025,
                date of publication 29/05/2025.{' '}
                <span className='text-[#2B6CEF] underline cursor-pointer hover:text-primary transition-colors'>
                    For full disclosure click here
                </span>
                .
            </p>
        </div>
    );
};

export default WidgetFooter;