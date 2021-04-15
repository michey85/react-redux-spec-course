import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import GoodsItem from './GoodsItem';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: theme.spacing(3),
    },
}));

const GoodsList = (props) => {
    const { goods, setOrder } = props;
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
};

export default GoodsList;
