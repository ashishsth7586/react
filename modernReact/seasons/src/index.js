import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component{
    state = {
        lat: null,
        long: null,
        errorMessage: '',
        time: new Date().toLocaleTimeString()
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setstate!!!
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                })
            }
        );
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)      
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            //return <div>Latitude: {this.state.lat}<br /> Longitude: {this.state.long}</div>
            return <SeasonDisplay latitude={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />
    }

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
                <div className = "time">
                    Time: {this.state.time}
                </div>
            </div>
        )
        
    }
};

ReactDOM.render(<App />, document.getElementById('root'));