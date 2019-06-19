import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './styles.css';

class App extends React.Component {
  state = { 
    videos: [],
    selectedVideo: null,
  }

  componentDidMount = () => {
    this.onTermSubmit('news');
  }

  apiKey = 'AIzaSyDDP0uyJjeTXYFxLCEhCaj8b6StpGh2HZI';
  
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        key: this.apiKey,
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  }

  render () {
    return (
      <div className="ui container main">
        <SearchBar 
          giveback={this.onTermSubmit} 
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"> 
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                giveback={this.onVideoSelect} 
                videos={this.state.videos} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;