import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"


export interface GameQuery{
  platformId: number | undefined
  genreId: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [ gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base: '1fr',
    lg: '200px 1fr',
  }}
  >
    <GridItem area='nav'>
    <NavBar onSearch={(searchText) => setGameQuery({ ...gamequery, searchText })} />
    </GridItem>
   <Show above="lg">
    <GridItem area='aside' paddingX={5}>
    <GenreList selectedGenreId={gamequery.genreId} onSelectGenre={(genre) => setGameQuery({ ...gamequery, genreId: genre.id})}/>
    </GridItem>
    </Show>
    <GridItem area='main'>
      <Box paddingLeft={2}>
      <GameHeading gamequery={gamequery}/>
      <Flex marginBottom={5}>
        <Box marginRight={5}>
      <PlatformSelector selectedPlatformId={gamequery.platformId} onSelectPlatform={(platform) => setGameQuery({ ...gamequery, platformId: platform.id})}/>
      </Box>
      <SortSelector sortOrder={gamequery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gamequery, sortOrder})}/>
      </Flex>
      </Box>
      <GameGrid gamequery={gamequery}/>
      </GridItem>
  </Grid>
  
}
export default App
