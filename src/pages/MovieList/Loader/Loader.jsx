import React from 'react';
import { LoadItem, LoadList, Wrapper } from './Loader.style';

const Loader = () => {
  return (
    <Wrapper>
      <LoadList>
        <LoadItem />
        <LoadItem />
        <LoadItem />
        <LoadItem />
        <LoadItem />
      </LoadList>
    </Wrapper>
  );
};

export default Loader;
