import { Component } from 'react';

import style from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  //для запису значення з форми
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // для відправки форми
  handleSubmit = ({ e }) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ search: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this.state;
    const { search } = this.state;
    return (
      <header className={style.searchbar}>
        <form onSubmit={handleSubmit} className={style.searchForm}>
          <button type="submit" className={style.searchFormButton}>
            <span className={style.searchFormButtonLabel}>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            className={style.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
