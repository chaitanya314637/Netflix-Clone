import React from 'react';
import './styles.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

import AspectRatioIcon from '@material-ui/icons/AspectRatio';
function FeaturedMovie( { item } ) {
    const [movieDetails, setMovieDetails] = useState({});
    const [trailerVideo, setTrailerVideo] = useState([]);
    const [urlVideo, setUrlVideo] = useState();
    const [videoFullScreen, setVideoFullScreen] = useState(false);
    const [descriptionVideo, setDescriptionVideo] = useState();

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  let description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;
  function handleShowTrailer(){
    const trailer = trailerVideo.results;
    if(trailer !== undefined && trailer.length > 0){
        const url = `https://youtube.com/embed/${trailer[0].key}?autoplay=1&controls=0&showinfo=0&autohide=1`;
        setUrlVideo(url);
    }
}
function handleVideoFullScreen(){
    setVideoFullScreen(!videoFullScreen);
}
  return (
    <section 
        className="featured" 
        style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}
    >
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                {console.log(item)}
                <div className="featured--info">
                    <div className="featured--points">{item.vote_average} pontos</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{item.number_of_seasons} temperatura{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>

                <div className="featured--description">{description}</div>
                <div className="featured--buttons">
                    <a onClick={() => handleShowTrailer()} className="featured--watchbutton"><div><PlayArrowIcon /> Play Movie</div></a>
                    <a disabled className="featured--mylistbutton"><div><AddIcon />Add to watchlist</div></a>
                </div>
                <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
            </div>
        </div>
        {
                urlVideo !== undefined
                &&
                <aside className={videoFullScreen ? 'video--fullscreen' : ''}>
                    <div>
                        <button onClick={() => handleVideoFullScreen()}><AspectRatioIcon /></button>
                    </div>
                    <iframe frameBorder="0" height="100%" width="100%" title="1"
                        src={urlVideo}>
                    </iframe>
                </aside>
            }
    </section>
  );
}

export default FeaturedMovie;
