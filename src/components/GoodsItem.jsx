import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Grid, Box, Button, Typography } from '@material-ui/core';
import { addToOrder } from '../redux/actions/addToOrder';

const GoodsItem = (props) => {
  const { id, name, price } = props;
  const dispatch = useDispatch();
  const {push} = useHistory();

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
          <Typography variant='h6' style={{ lineHeight: 2.5, textAlign: 'right' }}>
            Цена: {price} руб.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              dispatch(
                addToOrder({
                  id,
                  name,
                  price,
                })
              )
            }
          >
            Купить
          </Button>
          <Button color='secondary' onClick={() => push(`/catalog/item/${id}`)}>Подробнее</Button>
        </Box>
      </Box>
    </Grid>
  );
};

GoodsItem.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default GoodsItem;
