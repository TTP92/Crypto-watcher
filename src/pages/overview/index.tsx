import { styled } from 'styled-components';
import useCurrencyData from '../../hooks/use-currency-data';
import TableHeader from '../../components/table-header';
import SkeletonTable from '../../components/skeleton-table';
import { globalColors } from '../../global/styles';

const Item = styled.div`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 5px;
    padding-bottom: 5px;
`;
const CurrencyWrapper = styled.div`
    display: flex;
`;

const headerArray = [
    { id: 1, title: 'Name' },
    { id: 2, title: 'Ticker' },
    { id: 3, title: 'Netowrk' },
    { id: 4, title: 'Smart Contract' },
];

export const OverviewPage: React.FC = () => {
    const { currencyData, isLoading, error } = useCurrencyData();

    return (
        <>
            {!!error?.message && <div>{error.message}</div>}
            {isLoading ? (
                <SkeletonTable />
            ) : (
                <>
                    <TableHeader headerArray={headerArray} />
                    {currencyData.map((currency) => (
                        <>
                            <CurrencyWrapper key={currency.ticker}>
                                <Item>{currency.name ?? '-'}</Item>
                                <Item>{currency.ticker ?? '-'}</Item>
                                <Item>{currency.network ?? '-'}</Item>
                                <Item>{currency.smartContract ?? '-'}</Item>
                            </CurrencyWrapper>
                            <div style={{ height: '1px', backgroundColor: globalColors.grey }} />
                        </>
                    ))}
                </>
            )}
        </>
    );
};
