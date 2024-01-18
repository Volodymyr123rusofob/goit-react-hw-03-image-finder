import { Component } from 'react';

import Searchbar from './searchbar/Searchbar';

import style from './app.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.box}>
        <Searchbar />
      </div>
    );
  }
}

export default App;
