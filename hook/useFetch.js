import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from "@env";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { 
            ...query
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
    
            try {
                const response = await axios.request(options);
    
                setData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                
                if (error.response.status === 429) {
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    fetchData();
                } else {
                    setError(error);
                    alert(`${error}`);
                }
    
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;