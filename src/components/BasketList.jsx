import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

import BasketItem from './BasketItem';

const BasketList = () => {
  const { order } = useSelector((state) => state.shop);
  const {push} = useHistory();

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
        <BasketItem key={index} {...item} />
      ))}
      <Divider />
      <ListItem style={{fontWeight: 900}}>
        Общая стоимость:{' '}
        {order.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0)}{' '}
        рублей.
      </ListItem>
      <Button color='primary' variant='contained' onClick={() => push('/checkout')} style={{marginLeft: '1rem'}}>
        Оформить заказ
      </Button>
    </List>
  );
};

export default BasketList;
