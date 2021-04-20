import React, { Component } from 'react';

import { Container, TextField, Snackbar, Drawer } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import GoodsList from './GoodsList';
import BasketList from './BasketList';
import Header from './Header';
import Footer from './Footer';

import { goods } from '../data/goods';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            goods: goods,
            snackOpen: false,
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

    removeFromOrder = (goodsItem) => {
        const { order } = this.state;

        this.setState({
            order: order.filter((item) => item.id !== goodsItem.id),
        });
    };

    openSnack = () => this.setState({ snackOpen: true });
    closeSnack = () => this.setState({ snackOpen: false });
    toggleDrawer = (isOpen) => this.setState({ cartOpen: isOpen });

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
                <Snackbar
                    open={this.state.snackOpen}
                    autoHideDuration={2000}
                    onClose={this.closeSnack}
                >
                    <Alert onClose={this.closeSnack} severity='success'>
                        Товар добавлен в корзину
                    </Alert>
                </Snackbar>
                <Drawer
                    anchor={'right'}
                    open={this.state.cartOpen}
                    onClose={() => this.toggleDrawer(false)}
                >
                    <BasketList
                        order={this.state.order}
                        setOrder={this.removeFromOrder}
                    />
                </Drawer>
            </>
        );
    }
}

export default App;
