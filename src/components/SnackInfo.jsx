import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { motion, AnimatePresence } from 'framer-motion';

import { closeSnack } from '../redux/actions/closeSnack';

const SnackInfo = () => {
  const { snackOpen } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {snackOpen && (
        <motion.div
          initial={{
            y: 100,
            x: '-50%',
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: 0,
            x: '-50%',
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: 100,
            x: '-50%',
            opacity: 0,
          }}
          style={barStyle}
        >
          <Alert onClose={() => dispatch(closeSnack())} severity='success'>
            Товар добавлен в корзину
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const barStyle = {
  position: 'fixed',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '400px',
  maxWidth: '100%',
};

export { SnackInfo };
