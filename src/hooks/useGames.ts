import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');
 export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
    rating_top: number;
}

const useGames = ( gamequery: GameQuery) => 
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gamequery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
        .getAll({
            params: { 
                genres: gamequery.genre?.id, 
                parent_platforms: gamequery.platform?.id,
                ordering: gamequery.sortOrder,
                search: gamequery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    });

export default useGames;