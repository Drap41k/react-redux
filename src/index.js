import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'Your youtube api key here';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Прыжки с парашютом');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {
    const onSearchTermChange = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={onSearchTermChange} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));