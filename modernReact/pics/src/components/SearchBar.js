import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
         
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search-input">Image Search</label>
                        <input id="search-input" type="text" value={this.state.term } onChange={(e) => {this.setState({term: e.target.value})}} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;