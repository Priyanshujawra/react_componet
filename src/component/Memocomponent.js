import React from 'react';

// Define a pure functional component
const PureCounter = React.memo(({ count }) => {
  console.log('PureCounter is rendered');
  return <div>Count: {count}</div>;
});

// Example parent component
function MemoComponent() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
      <PureCounter count={count} />
    </div>
  );
}

export default MemoComponent;
