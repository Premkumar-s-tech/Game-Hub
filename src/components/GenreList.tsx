import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';


const GenreList = () => {
    const {data, isLoading, error} = useGenres();
    const selectedGenreId = useGameQueryStore(s => s.gamequery.genreId);
    const setSelectedgenreId = useGameQueryStore(s => s.setGenreId);
    if (error) return null;
    if (isLoading) return <Spinner/>;
  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data?.results.map((genre: Genre) => <ListItem key={genre.id} paddingY='5px'><HStack>
          <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
          <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenreId ? 'bold':'normal'} onClick={() => setSelectedgenreId(genre.id)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack></ListItem>)}
    </List>
    </>
  )
}

export default GenreList