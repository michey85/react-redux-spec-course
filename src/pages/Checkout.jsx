import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@material-ui/core';

import { editUserName } from '../redux/actions/editUserName';
import { editUserEmail } from '../redux/actions/editUserEmail';
import { editUserComment } from '../redux/actions/editUserComment';
import { cleanOrder } from '../redux/actions/cleanOrder';

class _Checkout extends Component {
  state = {
    name: '',
    email: '',
    comment: '',
    error: false,
    showDialog: false,
  };

  handleTextField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    const { name, email } = this.state;
    if (name.length > 5 && isValidEmail(email)) {
      console.log('Ok');
      this.setState({ error: false });
      this.setState({ showDialog: true });
      this.props.cleanOrder();
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const { editUserName, editUserEmail, editUserComment } = this.props;

    return (
      <>
        <h1>Оформление заказа</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <TextField
            name='name'
            value={this.state.name}
            label='ФИО*'
            fullWidth
            margin='dense'
            error={this.state.error}
            helperText={this.state.error && 'Имя обязательно к заполнению'}
            onChange={this.handleTextField}
            onBlur={() => editUserName(this.state.name)}
          />
          <TextField
            name='email'
            value={this.state.email}
            label='email*'
            fullWidth
            margin='dense'
            error={this.state.error}
            helperText={this.state.error && 'Неверный формат email'}
            onChange={this.handleTextField}
            onBlur={() => editUserEmail(this.state.email)}
          />
        </div>
        <TextField
          value={this.state.comment}
          label='Комментарий к заказу'
          multiline
          fullWidth
          margin='dense'
          name='comment'
          onChange={this.handleTextField}
          onBlur={() => editUserComment(this.state.comment)}
        />
        <br />
        <Button
          variant='contained'
          color='primary'
          style={{ marginTop: '2rem' }}
          onClick={this.handleClick}
        >
          Оплатить
        </Button>
        <Dialog
          open={this.state.showDialog}
          onClose={() => this.setState({ showDialog: false })}
        >
          <DialogTitle>Спасибо за заказ!</DialogTitle>
          <DialogContent>
            <Typography>Заказ успешно сформирован!</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => this.setState({ showDialog: false })}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

_Checkout.propTypes = {
  editUserName: PropTypes.func.isRequired,
  editUserEmail: PropTypes.func.isRequired,
  editUserComment: PropTypes.func.isRequired,
  cleanOrder: PropTypes.func.isRequired,
};

const Checkout = connect(null, {
  editUserName,
  editUserEmail,
  editUserComment,
  cleanOrder,
})(_Checkout);

export { Checkout };

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
