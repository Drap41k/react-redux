import React, {Component} from 'react';

export default class SearchBar extends Component {
  /*constructor({onInputChange}) {
    super();
     = onInputChange;
  }*/
  state = {term: ''};


  onInputChange(term) {
    this.props.onSearchTermChange(term)
  }
  render() {
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} type="text"/>;
      </div>
    );
  }
}