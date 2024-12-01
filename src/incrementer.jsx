import React from 'react';

export default function Incrementer() {
  const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        if (count !== 0) {setCount((count) => count - 1)};
    }

  return (
    <div className="flex items-center justify-center space-x-4">
      <button onClick={handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600">
        -
      </button>
      <span className="text-white text-2xl font-semibold">{count}</span>
      <button onClick={handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600">
        +
      </button>
    </div>
  );
}
