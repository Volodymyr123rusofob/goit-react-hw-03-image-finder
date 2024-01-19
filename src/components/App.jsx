import { Component } from 'react';
import { getAllImages } from './api/getAllImg';

import Searchbar from './searchbar/Searchbar';
import style from './app.module.css';

class App extends Component {
  state = {
    item: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    getAllImages()
      .then(({ data }) => {
        this.setState({
          item: data?.length ? data : [],
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className={style.box}>
        <Searchbar />
      </div>
    );
  }
}

export default App;
