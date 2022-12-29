import Card from '../card/Card';
import './card-list.styles.css';

const CardList = ({ filteredMonsters }) => {
  return (
    <div className='card-list'>
      {filteredMonsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
