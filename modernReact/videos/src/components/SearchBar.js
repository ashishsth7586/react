import React from 'react';

class SearchBar extends React.Component{
    state = {
        term: ''
    }
    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);

    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="video-search">Video Search</label>
                        <input type="text" value={this.state.term} id="video-search" onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;