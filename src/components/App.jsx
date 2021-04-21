import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TextField, Drawer } from '@material-ui/core';

import { initOrder } from '../redux/actions/initOrder';

import GoodsList from './GoodsList';
import BasketList from './BasketList';
import { SnackInfo } from './SnackInfo';
import Header from './Header';
import Footer from './Footer';

import { goods } from '../data/goods';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            goods: goods,
            cartOpen: false,
        };
    }

    handleChange = (e) => {
        if (!e.target.value) return this.setState({ goods, search: '' });

        this.setState({
            search: e.target.value,
            goods: goods.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ),
        });
    };

    openSnack = () => this.setState({ snackOpen: true });
    closeSnack = () => this.setState({ snackOpen: false });
    toggleDrawer = (isOpen) => this.setState({ cartOpen: isOpen });

    componentDidMount() {
        const order = localStorage.getItem('order');

        if (order) {
            this.props.initOrder(JSON.parse(order));
        }
    }

    render() {
        return (
            <>
                <Header handleCartClick={() => this.toggleDrawer(true)} />
                <Container maxWidth='lg' style={{ marginTop: '5rem' }}>
                    <TextField
                        value={this.state.search}
                        onChange={this.handleChange}
                        label='Поиск товаров'
                        fullWidth
                        style={{ marginBottom: '2rem' }}
                    />
                    <GoodsList goods={this.state.goods} />
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

export default connect(null, { initOrder })(App);
