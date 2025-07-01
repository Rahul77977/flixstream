import { useParams } from "react-router-dom";

const TvPlayer = () => {
  const { playerId } = useParams();
  const tvUrl = `https://vidsrc.xyz/embed/tv/${playerId}`;

  return (
    <div>
      <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={tvUrl}
        title="TV Show Player"
      />
    </div>
  );
};

export default TvPlayer;
