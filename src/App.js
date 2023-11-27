import { useState } from "react";
import { Input } from "./Input";
import { RemoveForm } from "./RemoveForm";

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const removeColorAtIndex = (indexToRemove) => {
    if (indexToRemove >= 0 && indexToRemove < colors.length) {
      const updatesColor = [...colors];
      updatesColor.splice(indexToRemove, 1);
      setColors(updatesColor);
    }
    // Yapılacaklar: 'indexToRemove' konumundaki elementi kaldırın
    // 'setColors'ı çağırarak state'i güncellemeyi unutmayın
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const renderedColors = colors.map((color) => {
    return <li key={crypto.randomUUID()}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
      <hr />
      <RemoveForm onSubmit={removeColorAtIndex} max={colors.length} />
    </div>
  );
}

export default App;
