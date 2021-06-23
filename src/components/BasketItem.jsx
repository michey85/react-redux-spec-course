import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, IconButton, Typography } from '@material-ui/core';
import { Close, Add, Remove } from '@material-ui/icons';

import { removeFromOrder } from '../redux/actions/removeFromOrder';
import { incQuantity } from '../redux/actions/incQuantity';
import { decQuantity } from '../redux/actions/decQuantity';

const BasketItem = (props) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Typography>
        {props.name} <strong>{props.price}</strong> руб{' '}
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <IconButton
            style={{ fontWeight: 900, color: '#000' }}
            onClick={() => dispatch(decQuantity(props.id))}
            disabled={props.quantity === 0}
          >
            <Remove />
          </IconButton>
          x{props.quantity}
          <IconButton
            style={{ fontWeight: 900, color: '#000' }}
            onClick={() => dispatch(incQuantity(props.id))}
          >
            <Add />
          </IconButton>
        </div>
      </Typography>
      <IconButton
        color='secondary'
        onClick={() => dispatch(removeFromOrder(props.id))}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
