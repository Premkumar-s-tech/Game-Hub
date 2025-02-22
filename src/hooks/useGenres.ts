
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FethResponse } from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;

}

const UseGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => 
        apiClient
    .get<FethResponse<Genre>>('/genres')
    .then(res => res.data),
    staleTime: 24 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres}
});

export default UseGenres;