import { useSelector } from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
    Link,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

const Header = ({ handleCartClick }) => {
    const { order } = useSelector((state) => state.shop);

    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant='h6'>
                    <Link href='/' color='inherit'>
                        React Shop
                    </Link>
                </Typography>
                <IconButton color='inherit' onClick={handleCartClick}>
                    <Badge badgeContent={order.length} color='secondary'>
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
