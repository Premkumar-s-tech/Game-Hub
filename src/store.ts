import create from "zustand";



interface GameQuery{
  platformId?: number;
  genreId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore{
    gamequery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    
}
const useGameQueryStore = create<GameQueryStore>(set => ({
    gamequery: {},
    setSearchText: (searchText) => set(() => ({ gamequery: { searchText} })),
    setGenreId: (genreId) => set(store => ({ gamequery: {...store.gamequery, genreId}})),
    setPlatformId: (platformId) => set(store => ({ gamequery: { ...store.gamequery, platformId}})),
    setSortOrder: (sortOrder) => set(store => ({ gamequery: {
        ...store.gamequery,sortOrder}}))
}));

export default useGameQueryStore;