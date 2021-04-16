import React from 'react';
import { ListItem, IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const BasketItem = (props) => {
    return (
        <ListItem>
            <Typography>
                {props.name} {props.price} руб x{props.quantity}
            </Typography>
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
