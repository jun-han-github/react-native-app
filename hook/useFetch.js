import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from "@env";
import { data as jobsData } from '../assets/data/demo-job';

console.log(jobsData);
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': RAPID_API_KEY,
    //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     },
    //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //     params: {
    //         ...query
    //     }
    // };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                // const response = await axios.request(options);

                // if (!response) {
                // } else {
                //     setData(response.data.data);
                // }
                setData(jobsData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                alert(`${error}`);
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
