import { useInfiniteQuery} from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games');
 export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
    rating_top: number;
}

const useGames = () => {
    const gamequery = useGameQueryStore(s => s.gamequery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gamequery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient
        .getAll({
            params: { 
                genres: gamequery.genreId, 
                parent_platforms: gamequery.platformId,
                ordering: gamequery.sortOrder,
                search: gamequery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h')
    });

}
    

export default useGames;