import React from 'react';
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList'

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    }
    componentDidMount() {
        this.onTermSubmit('Aretha Franklin');
    }
    onTermSubmit = (term) => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 8,
                key: "AIzaSyDDq3fBCS8FIYpbg7_GQYZ4qXzOoifmI6k",
                q: term
            }
        }).then(response => {
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })
        })       
    }
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }
    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ui eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                            I have {this.state.videos.length} videos
                        </div>
                        <div className="ui five wide column">   
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default App;