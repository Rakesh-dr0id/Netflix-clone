import React, { useState } from 'react';
import './listItem.scss';
import Extraction from '../../assets/Extraction.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import TrailerVideo from '../../assets/strangerthings.mp4';

// import requests from './../../request';
// import axios from 'axios';

const ListItem = ({ index }) => {
  // const base_url = 'https://image.tmdb.org/t/p/original/';
  // const base_url =
  //   'https://api.themoviedb.org/3/movie/550?api_key=61dbd499ed687d1cda34d63844d43610';

  const [isHovered, setIsHovered] = useState(false);
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchTopRated);
  //     setMovies(request.data.results);
  //     return request;
  //   }

  //   fetchData();
  // }, []);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* {movies.map((movie) => (
        <img
          key={movie.id}
          src={`${base_url}` ? movie.poster_path : movie.backdrop_path}
          alt="posters"
        />
      ))} */}

      <img src={Extraction} alt="Extraction poster" />

      {isHovered && (
        <>
          <video src={TrailerVideo} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2 hour 14mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              The film is about an Australian black ops mercenary whose mission
              to save an Indian drug lord's kidnapped son in Dhaka, Bangladesh
              goes awry when he is double-crossed.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
