import useTVShowList from '@/hooks/UseTvShowsList';
import TvShowCard from './TvShowCard';

const TvShowList = () => {
  const { tvshows } = useTVShowList();
  console.log(tvshows);

  return (
    <div className="p-3 mb-3">
      <h1 className="text-4xl font-semibold p-5 py-8">TV Shows</h1> {/* ✅ corrected class and text */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-y-3 gap-x-4"> {/* ✅ Added gap-x for better spacing */}
        {tvshows?.map((tvshow) => ( // ✅ Optional chaining to prevent runtime error
          <div key={tvshow.id}>
            <TvShowCard tvshowResult={tvshow} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShowList;
