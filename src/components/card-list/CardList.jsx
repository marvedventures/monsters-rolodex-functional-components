import React, { Component } from 'react';
import Card from '../card/Card';
import './card-list.styles.css';

export class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;

    return (
      <div className='card-list'>
        {filteredMonsters.map(monster => (
          <Card monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
