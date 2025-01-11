import React, { useState } from 'react';
import './App.css'; 

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <div
  style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#2C3E50', 
    padding:'10px 20px',
    gap:'5px'
  }}
>
  <img
    src="/item-list.png"
    alt="Icon"
    style={{
      width: '40px', 
      height: '40px',
      paddingLeft:'150px'
    }}
  />
  <h1>
    Item List Manager
  </h1>
  
</div>
<h2 className="heading">Item List</h2>
      <div>
        <div>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        </div>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;

// function App() {
//   return (
//     <h1>Chai aur React || Rahul Kumar</h1>
//   );
// }

// export default App;
