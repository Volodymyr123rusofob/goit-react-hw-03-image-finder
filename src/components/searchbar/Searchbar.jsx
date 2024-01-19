import { Component } from 'react';

import style from './searchbar.module.css';

const Searchbar = onSubmit => {
  return (
    <header class={style.searchbar}>
      <form class={style.searchForm}>
        <button type="submit" class={style.searchFormButton}>
          <span class={style.searchFormButtonLabel}>Search</span>
        </button>

        <input
          class={style.searchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
