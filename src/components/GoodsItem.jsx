import React from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Box, Button, Typography } from '@material-ui/core';
import { addToOrder } from '../redux/actions/addToOrder';

const GoodsItem = (props) => {
    const { name, price } = props;
    const dispatch = useDispatch();

    return (
        <Grid item xs={12} md={4}>
            <Box
                color='text.primary'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid black',
                }}
            >
                <img
                    src={`https://via.placeholder.com/300x150.png?text=${name.slice(
                        0,
                        12
                    )}`}
                    alt={name}
                />
                <Box style={{ padding: '1rem' }}>
                    <Typography variant='h5' component='h2'>
                        {name}
                    </Typography>
                    <Typography variant='h6' style={{ lineHeight: 2.5 }}>
                        Цена: {price} руб.
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() =>
                            dispatch(
                                addToOrder({
                                    id: props.id,
                                    name: props.name,
                                    price: props.price,
                                })
                            )
                        }
                    >
                        Купить
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default GoodsItem;
