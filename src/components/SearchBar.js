import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  componentDidMount = () => {

  }
  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.giveback(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type = "text"
              placeholder = "search here"
              value = {this.state.term}
              onChange = {
                this.onInputChange
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;