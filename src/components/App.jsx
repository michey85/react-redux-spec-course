import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Container, Drawer } from '@material-ui/core';

import { initOrder } from '../redux/actions/initOrder';

import BasketList from './BasketList';
import { SnackInfo } from './SnackInfo';
import Header from './Header';
import Footer from './Footer';

import { Homepage } from '../pages/Homepage';
import { About } from '../pages/About';
import { Catalog } from '../pages/Catalog';
import { Product } from '../pages/Product';
import { Delivery } from '../pages/Delivery';
import { Checkout } from '../pages/Checkout';
import { NotFound } from '../pages/NotFound';

import { goods } from '../data/goods';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
    };
  }

  toggleDrawer = (isOpen) => this.setState({ cartOpen: isOpen });

  componentDidMount() {
    const { initOrder = Function.prototype } = this.props;

    const order = localStorage.getItem('order');

    if (order) {
      initOrder(JSON.parse(order));
    }
  }

  render() {
    return (
      <>
        <Header handleCartClick={() => this.toggleDrawer(true)} />
        <Container maxWidth='lg' style={{marginTop: '5rem'}}>
          <Switch>
            <Route exact path='/'>
              <Homepage goods={goods} />
            </Route>
            <Route exact path='/about' component={About} />
            <Route exact path='/delivery' component={Delivery} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/catalog'>
              <Catalog goods={goods} />
            </Route>
            <Route exact path='/catalog/:category'>
              <Catalog goods={goods} />
            </Route>
            <Route exact path='/catalog/item/:id'>
              <Product goods={goods} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Container>
        <Footer />
        <SnackInfo />
        <Drawer
          anchor={'right'}
          open={this.state.cartOpen}
          onClose={() => this.toggleDrawer(false)}
        >
          <BasketList />
        </Drawer>
      </>
    );
  }
}

App.propTypes = {
  initOrder: PropTypes.func.isRequired,
};

App.defaultProps = {
  initOrder: Function.prototype,
};

App.displayName = 'App';

export default connect(null, { initOrder })(App);
