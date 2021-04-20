import React from 'react';
import { useDispatch } from 'react-redux';
import { ListItem, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { removeFromOrder } from '../redux/actions/removeFromOrder';

const BasketItem = (props) => {
    const dispatch = useDispatch();

    return (
        <ListItem>
            <Typography>
                {props.name} {props.price} руб x{props.quantity}
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
