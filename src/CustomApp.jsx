import React from 'react';

import BackwardCounter from './components/custom-hooks/BackwardCounter';
import ForwardCounter from './components/custom-hooks/ForwardCounter';

function App() {
  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
}

export default App;
