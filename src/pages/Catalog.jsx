import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

import GoodsList from '../components/GoodsList';

const categoryMenu = {
  books: 'книги',
  video: 'видео курсы',
  stickers: 'наклейки',
};

class _Catalog extends React.Component {
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

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    console.log(params);

    this.setState({
      goods: this.props.goods.filter((item) =>
        item.category.includes(params.category ? params.category : '')
      ),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const {
        match: { params },
      } = this.props;

      this.setState({
        goods: this.props.goods.filter((item) =>
          item.category.includes(params.category ? params.category : '')
        ),
      });
    }
  }

  render() {
    const { goods } = this.props;

    const categories = goods.reduce((acc, item) => {
      if (acc.includes(item.category)) return acc;

      return [...acc, item.category];
    }, []);

    return (
      <>
        <TextField
          value={this.state.search}
          onChange={this.handleChange}
          label='Поиск товаров'
          fullWidth
          style={{ marginBottom: '2rem' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <Link to={'/catalog'}>
            <Button>все</Button>
          </Link>
          {categories.map((category) => (
            <Link key={category} to={`/catalog/${category}`} replace>
              <Button>{categoryMenu[category]}</Button>
            </Link>
          ))}
        </div>
        <GoodsList goods={this.state.goods} />
      </>
    );
  }
}

_Catalog.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  goods: PropTypes.array.isRequired,
};

const Catalog = withRouter(_Catalog);

export { Catalog };
