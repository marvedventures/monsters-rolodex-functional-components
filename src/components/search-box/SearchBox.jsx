import React, { Component } from 'react';
import './search-box.styles.css';

export class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;

    return (
      <div>
        <input
          type='search'
          placeholder='Search monsters'
          className='search-box'
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
