import React from 'react';
import glamorous from 'glamorous';

import loading from '../../../assets/logo.svg';

const CallbackContainer = glamorous.div({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white'
});

const Loading = glamorous.img({
  animation: 'logo-spin infinite 20s linear'
});

const Callback = () =>
  <CallbackContainer>
    <Loading src={loading} alt='loading' />
  </CallbackContainer>;

export default Callback;
