import React from 'react';
import { Wrapper, ButtonLoader } from './Button.style';
const Button = ({ onClick, children, loading }) => {
  return (
    <Wrapper onClick={onClick} loading={loading}>
      {loading ? <ButtonLoader /> : children}
    </Wrapper>
  );
};

export default Button;
