import React, {Component} from 'react';

export default class SearchBar extends Component {
  onChange(e) {
    console.log(e.target.value);
  }
  render() {
    return <input onChange={this.onChange} type="text"/>;
  }
}