import { SearchResultContext } from '@/context/SearchResult.context'
import useMultiSearch from '@/hooks/UseMultiSearch';
    import React, { useContext } from 'react'
import MovieCard from './MovieCard';
import TvShowCard from './TvShowCard';

const  SearchList = () => {
    const {searchData,searchText}=useContext(SearchResultContext);
    useMultiSearch(searchText);
    console.log(searchData)
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3'> {
 searchData?.map((data)=>{
    return (
        <div key={data.id}>
        {data.media_type==="movie"?(
            <MovieCard movieResult={data}/>
        ):(
          <TvShowCard tvshowResult={data}/>  
        )}
    </div>
    )
 })
    }</div>
  )
}

export default  SearchList