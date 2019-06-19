import React from 'react';
import './VideoItem.css';
const VideoItem = ({ video, _giveback_ }) => {
  const url = video.snippet.thumbnails.medium.url;
  return (
    <div onClick={() => _giveback_(video)} className="item video-item">
      <img 
        className="ui image" 
        src={url} 
        alt="temp"
      />
      <div className="content">
        <div className="header">
          { video.snippet.title }
        </div>
      </div>
    </div>
  );
}
export default VideoItem;