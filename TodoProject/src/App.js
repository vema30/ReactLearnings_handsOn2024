import React, { useState } from "react";

const App = () => {
  const [grid, setGrid] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  const addme = () => {
    if (text.trim() !== '') {
      setGrid([...grid, text]);
      setText('');
    }
  }

  const deleteItem = (index) => {
    const newGrid = grid.filter((_, idx) => idx !== index);
    setGrid(newGrid);
  }

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(grid[index]);
  }

  const saveEdit = () => {
    if (editText.trim() !== '') {
      const newGrid = grid.map((item, index) =>
        index === editIndex ? editText : item
      );
      setGrid(newGrid);
      setEditIndex(null);
      setEditText('');
    }
  }

  const cancelEdit = () => {
    setEditIndex(null);
    setEditText('');
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header style={{ backgroundColor: '#4CAF50', padding: '20px', color: '#fff' }}>
        <h1>To-Do List</h1>
      </header>

      <div style={{ margin: '20px auto', maxWidth: '600px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ fontSize: '16px', marginBottom: '10px', display: 'block' }}>
          Enter text:
          <input
            placeholder="Enter to-do list item"
            value={text}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              boxSizing: 'border-box'
            }}
          />
        </label>
        <button
          onClick={addme}
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '10px'
          }}
        >
          Add
        </button>

        <ul style={{ listStyleType: 'none', padding: 0, margin: '20px 0' }}>
          {grid.map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{ flex: 1, fontSize: '16px' }}>{item}</div>
              {editIndex === index ? (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={{
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      fontSize: '16px',
                      width: '150px'
                    }}
                  />
                  <button
                    onClick={saveEdit}
                    style={{
                      padding: '8px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#4CAF50',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    style={{
                      padding: '8px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#f44336',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => startEdit(index)}
                    style={{
                      padding: '8px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#2196F3',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(index)}
                    style={{
                      padding: '8px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#f44336',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
