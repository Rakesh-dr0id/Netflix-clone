import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TeaserVideo from '../../assets/strangerthings.mp4';
import './watch.scss';

import { useNavigate } from 'react-router-dom';

const Watch = () => {
  const navigate = useNavigate();

  return (
    <div className="watch">
      <div
        className="back"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className="video" progress controls src={TeaserVideo} />
    </div>
  );
};

export default Watch;
