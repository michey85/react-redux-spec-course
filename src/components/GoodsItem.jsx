import React from 'react';

import { Grid, Box, Button, Typography } from '@material-ui/core';

const GoodsItem = (props) => {
    const { name, price, setOrder } = props;

    return (
        <Grid item xs='12' md='4'>
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
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
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
