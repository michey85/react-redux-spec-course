import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';

const Header = ({ handleCartClick }) => {
  const { order } = useSelector((state) => state.shop);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant='h6'>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            React Shop
          </Link>
        </Typography>
        <div>
          <NavLink
            to='/catalog'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              padding: '1rem',
            }}
            activeStyle={{
              backgroundColor: '#fff',
              color: 'blue',
            }}
          >
            Каталог
          </NavLink>
          <NavLink
            to='/about'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              padding: '1rem',
            }}
            activeStyle={{
              backgroundColor: '#fff',
              color: 'blue',
            }}
          >
            О нас
          </NavLink>
          <NavLink
            to='/delivery'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              padding: '1rem',
            }}
            activeStyle={{
              backgroundColor: '#fff',
              color: 'blue',
            }}
          >
            Доставка и оплата
          </NavLink>
        </div>
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
