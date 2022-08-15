import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TeaserVideo from '../../assets/strangerthings.mp4';
import './watch.scss';

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className="video" autoPlay progress controls src={TeaserVideo} />
    </div>
  );
};

export default Watch;
