import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-6 border-2 border-red-400 rounded-lg shadow-md text-center">
      <h1 className="text-xl font-bold text-red-600 mb-4">
        Anda Mengklik Sekian Kali
      </h1>
      <p className="text-3xl font-mono text-gray-800 mb-4">{count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform active:scale-105"
        >
          Tambah
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-500 transition-transform active:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
