import React, { Component } from 'react';

import GoodsList from './GoodsList';
import BasketList from './BasketList';
import Search from './Search';

import { goods } from '../data/goods';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            search: '',
            goods: goods,
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

    addToOrder = (goodsItem) => {
        const { order } = this.state;

        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            this.setState({
                order: order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                }),
            });
        } else {
            this.setState({
                order: [
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            });
        }
    };

    removeFromOrder = (goodsItem) => {
        const { order } = this.state;

        this.setState({
            order: order.filter((item) => item.id !== goodsItem.id),
        });
    };

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <Search
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                    <GoodsList
                        goods={this.state.goods}
                        setOrder={this.addToOrder}
                    />

                    <BasketList
                        order={this.state.order}
                        setOrder={this.removeFromOrder}
                    />
                </div>
            </div>
        );
    }
}

export default App;
