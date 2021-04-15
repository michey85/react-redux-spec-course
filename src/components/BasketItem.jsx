import React from 'react';

const BasketItem = (props) => {
    return (
        <li className='list-group-item'>
            {props.name} {props.price}руб x{props.quantity}
            <button
                className='btn btn-primary'
                onClick={() =>
                    props.setOrder({
                        id: props.id,
                        name: props.name,
                        price: props.price,
                    })
                }
            >
                Удалить из корзины
            </button>
        </li>
    );
};

export default BasketItem;
