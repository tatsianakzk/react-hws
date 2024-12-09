import { useState } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWithLogging = async (url, options = {}) => {
        setLoading(true);
        setError(null);

        try {

            const payload = options.body ? JSON.parse(options.body) : null;

            const response = await fetch(url, options);

            const status = response.status;
            const data = await response.json();


            console.log('API Call:', { url, payload, status, data });


            const logEntry = { url, payload, status, data, timestamp: new Date().toISOString() };
            const logs = JSON.parse(localStorage.getItem('apiLogs')) || [];
            logs.push(logEntry);
            localStorage.setItem('apiLogs', JSON.stringify(logs));

            setLoading(false);
            return { data, status };
        } catch (err) {
            console.error('API Error:', err);
            setError(err);
            setLoading(false);
            throw err;
        }
    };

    return { fetchWithLogging, loading, error };
};

export default useFetch;