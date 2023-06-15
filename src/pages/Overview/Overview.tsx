import { styled } from 'styled-components';
import useCurrencyData from '../../hooks/useCurrencyData/useCurrencyData';
import {TableHeader} from '../../components/TableHeader/TableHeader';
import { globalColors } from '../../global/styles';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { SkeletonTable } from '../../components/SkeletonTable';
import { useEffect, useState } from 'react';
import { Input } from '../../components/InputWithLabel/Input';

const ErrorWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
`;
const ItemWrapper = styled.div`
    display: flex;
`;
const Item = styled.div`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 5px;
    padding-bottom: 5px;
`;
const CurrencyWrapper = styled.div`
    &.expanded {
        height: 200px;
    }
    &:hover {
        cursor: pointer;
        background-color: ${globalColors.blue};
    }
`;

const Separator = styled.div`
    height: 1px;
    background-color: ${globalColors.grey};
`;

const headerArray = [
    { id: 1, title: 'Name' },
    { id: 2, title: 'Ticker' },
    { id: 3, title: 'Network' },
    { id: 4, title: 'Smart Contract' },
];

export const Overview: React.FC = () => {
    const { data, isLoading, error, fetchCurrencyData, } = useCurrencyData();
    const [searchString, setSearchString] = useState<string>('');
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    useEffect(() => {
        fetchCurrencyData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
    };

    const filterData = () => {
        return data.filter((currency) => {
                if (!searchString) {
                    return true;
                }
                const searchLowerCase = searchString.toLowerCase();
                const includeInName = currency?.name?.toLowerCase().includes(searchLowerCase);
                const includeInTicker = currency?.ticker?.toLowerCase().includes(searchLowerCase);
                const includeInNetwork = currency?.network?.toLowerCase().includes(searchLowerCase);
                const includeInSmartContract = currency?.network?.toLowerCase().includes(searchLowerCase);

                return (
                    includeInName ||
                    includeInTicker ||
                    includeInNetwork ||
                    includeInSmartContract
                );
            })
    }

    if (isLoading) {
        return <SkeletonTable />;
    }

    return (
        <>
            <Input onChange={handleChange} label="Search:" />
            <TableHeader {...{ headerArray }} />
            {!!error?.message && (
                <ErrorWrapper>
                    <ErrorBox>{error.message}</ErrorBox>
                </ErrorWrapper>
            )}
            {filterData()
                .map((currency, index) => (
                    <>
                        <CurrencyWrapper
                            key={currency.ticker}
                            className={expandedItem === currency.ticker ? 'expanded' : ''}
                            onClick={() => {
                                setExpandedItem((prevExpandedItem) => 
                                    prevExpandedItem === currency.ticker ? null : currency.ticker
                            )}}
                        >
                            <ItemWrapper>
                                <Item>{currency.name ?? '-'}</Item>
                                <Item>{currency.ticker ?? '-'}</Item>
                                <Item>{currency.network ?? '-'}</Item>
                                <Item>{currency.smartContract ?? '-'}</Item>
                            </ItemWrapper>
                            {expandedItem === currency.ticker && <Item>
                                THIS ITEM IS EXPANDED - 
                                Elaborate information can be displayed here.
                            </Item>}
                        </CurrencyWrapper>

                        <Separator key={`${currency.ticker + index}`} />
                    </>
                ))}
        </>
    );
};
