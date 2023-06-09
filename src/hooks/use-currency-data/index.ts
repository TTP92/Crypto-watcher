import { useEffect, useMemo, useState } from 'react';
import useToggle from '../use-toggle';

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
    const [isLoading, toggleIsLoading] = useToggle(true);
    const [error, setError] = useState<CurrencyError | null>(null);

    const apiKey = useMemo(() => process.env.REACT_APP_API_KEY, []);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch('https://api.swapzone.io/v1/exchange/currencies', {
                    headers: {
                        'x-api-key': `${apiKey}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }

                const data: Currency[] = await response.json();
                setCurrencyData(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError({ message: error.message });
                }
            } finally {
                toggleIsLoading();
            }
        };

        fetchCurrencyData();
    }, []);

    return { currencyData, isLoading, error };
};

export default useCurrencyData;
