import React from 'react';
import styled from '@emotion/styled';

import PlayListCarousel from './playlist-carousel';

function App() {
  return (
    <S.Root>
      <PlayListCarousel />
    </S.Root>
  );
}

const S = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
};

export default App;
