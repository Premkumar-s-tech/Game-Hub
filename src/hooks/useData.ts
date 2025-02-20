import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";
import { T } from "framer-motion/dist/types.d-6pKw1mTI";

interface FethResponse<T>{
    count: number;
    results: T[];

}

const UseData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setLoading] =  useState(false);
        
            useEffect(() => {
                const controller = new AbortController();
                setLoading(true);
                apiClient.get<FethResponse<T>>(endpoint, { signal: controller.signal})
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message)
                    setLoading(false);
                });
                return () => controller.abort();
            }, []);
    
       return { data, error, isLoading};
};

export default UseData;