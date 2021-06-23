import React from 'react';
import { TextField } from '@material-ui/core';

import GoodsList from '../components/GoodsList';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      goods: this.props.goods,
    };
  }

  handleChange = (e) => {
    if (!e.target.value)
      return this.setState({ goods: this.props.goods, search: '' });

    this.setState({
      search: e.target.value,
      goods: this.props.goods.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  render() {
    return (
      <>
        <TextField
          value={this.state.search}
          onChange={this.handleChange}
          label='Поиск товаров'
          fullWidth
          style={{ marginBottom: '2rem' }}
        />
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

export { Homepage };
