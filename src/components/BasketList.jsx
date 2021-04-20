import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

import BasketItem from './BasketItem';

const BasketList = (props) => {
    const { order, setOrder } = props;

    if (!order.length) {
        return (
            <List style={{ width: '420px', maxWidth: '90%' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary='Корзина' />
                </ListItem>
                <Divider />
                <ListItem className='list-group-item'>Товаров нет</ListItem>
            </List>
        );
    }

    return (
        <List style={{ width: '420px', maxWidth: '90%' }}>
            <ListItem>
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary='Корзина' />
            </ListItem>
            <Divider />
            {order.map((item, index) => (
                <BasketItem key={index} setOrder={setOrder} {...item} />
            ))}
            <Divider />
            <ListItem>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
            </ListItem>
        </List>
    );
};

export default BasketList;