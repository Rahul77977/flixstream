import  { useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import useTrendingList from '@/hooks/useTrendingList';
import MovieCard from '../ui/MovieCard';

const TrendingMovie = () => {
  const { trendingData } = useTrendingList("movie");
  const [expand, setExpand] = useState(false);

  return (
    <div className='p-4 mb-8'>
      {/* Header with icon beside heading */}
      <div
        className="flex items-center gap-2 cursor-pointer mb-6"
        onClick={() => setExpand(!expand)}
      >
        <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800'>trending movies</h1>
        <span
          className={`text-4xl text-gray-500 transition-transform duration-300 ${
            expand ? 'rotate-180' : ''
          }`}
        >
          <MdOutlineExpandMore />
        </span>
      </div>

      {/* Movie Grid */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {(expand ? trendingData : trendingData?.slice(0, 10))?.map((movie: any) => (
          <div key={movie.id}>
            <MovieCard movieResult={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovie;
