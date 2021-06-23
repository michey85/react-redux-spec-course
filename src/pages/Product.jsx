import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Product = (props) => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const { goods } = props;
  console.log(useHistory());

  const product = goods.find((item) => item.id === id);
  if (!product) {
    return <Redirect to='/404' />;
  }

  const { name, category, price } = product;

  return (
    <div>
      <div style={cardStyle}>
        <h1>{name}</h1>
        <h6 style={categoryStyle}>{category}</h6>
        <p style={priceStyle}>{price} rubles</p>
        <p>More info here in future...</p>

        <Button variant='contained' color="primary">Купить</Button>
      </div>
      <hr />
      <Button variant='contained' onClick={goBack} color="secondary" style={{marginTop: '1.6rem'}}>
        Назад
      </Button>
    </div>
  );
};

export { Product };

const cardStyle = {
  display: 'inline-flex',
  flexDirection: 'column',
  padding: '0.5rem 0.8rem',
  border: '1px solid #eee',
  marginBottom: '1.2rem',
}

const priceStyle = {
  fontSize: '1.6rem',
  fontWeight: 900,
};

const categoryStyle = {
  margin: 0,
  background: '#ffd',
  padding: '0.5rem 0.8rem',
  border: '1px solid #eee',
  alignSelf: 'flex-start',
};