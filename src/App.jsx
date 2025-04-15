import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(input); // Not recommended in real apps!
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-black box-shadow-white">
      <div className="bg-white shadow-xl p-6 rounded-2xl w-80">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 text-right text-xl p-2 border rounded border-[5px]"
        />
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="col-span-2 bg-red-400 text-white p-2 rounded">C</button>
          <button onClick={handleBackspace} className="bg-yellow-400 p-2 rounded">←</button>
          <button onClick={() => handleClick("/")} className="bg-blue-400 text-white p-2 rounded">/</button>

          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => btn === "=" ? calculate() : handleClick(btn)}
              className="bg-gray-300 p-2 rounded hover:bg-gray-500 hover:color-white transition duration-200" 
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
