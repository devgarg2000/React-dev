import React, { useState } from 'react';
import { Add } from './Basics/IncrementCount';

function App() {
  const [num1, setNum1] = useState(2000000000);
  const [num2, setNum2] = useState(2);

  return (
    <div>
      <Add a={num1} b={num2} />
    </div>
  );
}

export default App;
