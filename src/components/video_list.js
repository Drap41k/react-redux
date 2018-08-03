import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  getListItems() {
    return this.props.videos.map((video) => {
      return <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />
    });
  }

  render() {
    return (
      <ul className="col-md-4">
        {this.getListItems()}
      </ul>
    )
  }
}

export default VideoList;