import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { Button } from 'reactstrap';

class Shipping extends PureComponent {
  render () {
    const { cep, onChange, onSubmit } = this.props;

    return (
      <div className='d-flex'>
        <MaskedInput
          name='cep'
          mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/]}
          className='mr-2 form-control'
          placeholder='cep'
          required
          onChange={onChange}
          value={cep} />
        <Button type='button' onClick={onSubmit}>Procurar</Button>
      </div>
    );
  }
}

Shipping.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Shipping;
