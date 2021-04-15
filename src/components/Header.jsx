import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

const Header = ({ basketInfo, handleCartClick }) => {
    return (
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <Typography variant='h6'>React Shop</Typography>
                <IconButton color='inherit' onClick={handleCartClick}>
                    <Badge badgeContent={basketInfo} color='secondary'>
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
