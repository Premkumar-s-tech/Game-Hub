import exp from "constants";
import UseGenres from "./useGenres";

const useGenre = ( id?: number) => {
    const { data : genres } = UseGenres();
return genres?.results.find((g: { id: number; }) => g.id ===id);
}

export default useGenre;