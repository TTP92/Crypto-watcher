import { useEffect, useMemo, useState } from 'react';
import useToggle from '../useToggle/useToggle';

interface Currency {
    name: string;
    ticker: string;
    network: string;
    smartContract: string;
}

interface CurrencyError {
    message: string;
}
const useCurrencyData = () => {
    const [currencyData, setCurrencyData] = useState<Currency[]>([]);
    const [isLoading, toggleIsLoading] = useToggle();
    const [error, setError] = useState<CurrencyError | null>(null);

    const apiKey = useMemo(() => process.env.REACT_APP_API_KEY, []);

    const fetchCurrencyData = async () => {
        toggleIsLoading();
        try {
            // @TODO create common axios instance
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}v1/exchange/currencies`, {
                headers: {
                    'x-api-key': `${apiKey}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch currency data');
            }

            const data: Currency[] = await response.json();
            setCurrencyData(data);
        } catch (error: any) {
            setError({ message: error.message ?? 'unknown error'});
        } finally {
            toggleIsLoading();
        }
    };

    // @TODO make a search function to filter for the searched

    return { data: currencyData, isLoading, error, fetchCurrencyData };
};

export default useCurrencyData;
