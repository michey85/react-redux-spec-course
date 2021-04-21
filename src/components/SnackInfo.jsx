import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { closeSnack } from '../redux/actions/closeSnack';

const SnackInfo = () => {
    const { snackOpen } = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={snackOpen}
            autoHideDuration={2000}
            onClose={() => dispatch(closeSnack())}
        >
            <Alert onClose={() => dispatch(closeSnack())} severity='success'>
                Товар добавлен в корзину
            </Alert>
        </Snackbar>
    );
};

export { SnackInfo };
