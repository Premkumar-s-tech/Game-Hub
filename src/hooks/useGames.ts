import { GameQuery } from "../App";
import UseData from "./useData";
import { Genre } from "./useGenres";
export interface Platform{
    id: number;
    name: string;
    slug: string;

}
 export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
}

const useGames = ( gamequery: GameQuery) => 
    UseData<Game>('/games', {
        params: { 
            genres: gamequery.genre?.id, 
            platforms: gamequery.platform?.id,
            ordering: gamequery.sortOrder,
            search: gamequery.searchText
        }},
        [gamequery]);

export default useGames;