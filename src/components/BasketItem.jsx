import React from 'react';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const BasketItem = (props) => {
    return (
        <ListItem>
            {props.name} {props.price}руб x{props.quantity}
            <IconButton
                color='secondary'
                onClick={() =>
                    props.setOrder({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                    })
                }
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;
