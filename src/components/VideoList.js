import React from 'react';
import VideoItem from './VideoItem'
const VideoList = ({ videos, giveback }) => {
  let uid = 0;
  const renderedList = videos.map((video) => {
    uid = uid += 1;
    return (
      <VideoItem 
        _giveback_={giveback}
        key={uid} 
        video={video}
      />
    );
  });
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}

export default VideoList;