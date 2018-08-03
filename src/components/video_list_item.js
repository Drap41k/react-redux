import React from 'react';

const VideoListItem  = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} width="120" height="90" className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;