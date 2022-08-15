import React, { useState } from 'react';
import './listItem.scss';
import Extraction from '../../assets/Extraction.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import TrailerVideo from '../../assets/strangerthings.mp4';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
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
