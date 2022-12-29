import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
      })
      .catch(err => console.log(err.message));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className='search-box'
        placeholder='Search monsters...'
      />
      <CardList filteredMonsters={filteredMonsters} />
    </div>
  );
};

export default App;
