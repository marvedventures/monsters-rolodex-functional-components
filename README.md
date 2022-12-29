# Monsters Rolodex (Functional Components)

This is a React App created with Vite.
It's a React Functional Component project with search and filter functionality.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![Picture 2](https://user-images.githubusercontent.com/108392678/209674407-20548465-a3ef-46b4-a780-978f8f890d2a.png)
![Picture 1](https://user-images.githubusercontent.com/108392678/209674377-ba41bef6-d999-46f8-a1d2-d68cbf43073c.png)

### Links

- [Demo](https://monsters-rolodex-class-components.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/docs/getting-started.html)
- [Vite](https://vitejs.dev/guide/)

### What I learned

- Creating a React App with Vite
- Using Functional Components
- When React renders and re-renders in Functional Components
- Managing state within a component using useState Hook
- Handling side-effects with useEffect Hook
- Filtering a state inside useEffect Hook
- Mapping arrays to elements
- Using keys Within mapped elements
- Passing destructured props to a component

Here is a code snippet:

```App.jsx
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
  }, [monsters, filteredMonsters]);

  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
```

### Useful resources

- [React Docs (Handling Side Effects) ](https://beta.reactjs.org/reference/react/useEffect) - This helped me for knowing fetching data and avoiding infinite re-rendering in React.
- [React Docs (Lists and Keys)](https://reactjs.org/docs/lists-and-keys.html) - This helped me for mapping arrays to elements and adding keys.

## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
