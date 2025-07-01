import  { useState } from 'react';
import { MdOutlineExpandMore } from 'react-icons/md';
import useTrendingList from '@/hooks/useTrendingList';
import TvShowCard from '../ui/TvShowCard';

const Trendingtvshows = () => {
  const { trendingData } = useTrendingList("tv");
  const [expand, setExpand] = useState(false);

  return (
    <div className='p-4 mb-8'>
      {/* Heading + Icon in one line */}
      <div className="flex items-center gap-2 cursor-pointer mb-6" onClick={() => setExpand(!expand)}>
        <h1 className='text-3xl sm:text-4xl font-semibold text-gray-800'>trending tv shows</h1>
        <span
          className={`text-4xl text-gray-500 transition-transform duration-300 ${
            expand ? 'rotate-180' : ''
          }`}
        >
          <MdOutlineExpandMore />
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {(expand ? trendingData : trendingData?.slice(0, 10))?.map((tvshow: any) => (
          <div key={tvshow.id}>
            <TvShowCard tvshowResult={tvshow} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingtvshows;
