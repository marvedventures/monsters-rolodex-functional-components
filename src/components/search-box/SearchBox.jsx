import './search-box.styles.css';

const SearchBox = ({ placeholder, className, onChangeHandler }) => {
  return (
    <div>
      <input
        type='search'
        onChange={onChangeHandler}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;
