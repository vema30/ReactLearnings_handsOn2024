import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(0);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleCarBrandChange(event) {
    setCarBrand(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handlePriceChange(event) {
    setPrice(Number(event.target.value));
  }

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px'
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    fontSize: '14px'
  };

  const checkboxStyle = {
    marginRight: '10px'
  };

  const radioStyle = {
    marginRight: '5px'
  };

  const rangeStyle = {
    width: '100%',
    marginTop: '5px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>React Form Handling</h1>
      
      <div id='flname'>
        <div>
          <label htmlFor="firstName" style={labelStyle}>
            Enter your First name:
            <input 
              type="text" 
              id="firstName" 
              value={firstName} 
              onChange={handleFirstNameChange} 
              style={inputStyle}
            />
          </label>
        </div>
        
        <div>
          <label htmlFor="lastName" style={labelStyle}>
            Enter your Last name:
            <input 
              type="text" 
              id="lastName" 
              value={lastName} 
              onChange={handleLastNameChange} 
              style={inputStyle}
            />
          </label>
        </div>
      </div>

      <br />

      <label htmlFor="message" style={labelStyle}>
        Your Message:
        <textarea 
          id="message" 
          name="postContent" 
          rows={3} 
          cols={20} 
          value={message} 
          onChange={handleMessageChange} 
          style={inputStyle}
        />
      </label>

      <div>
        <br />
        <label htmlFor="carBrand" style={labelStyle}>
          Pick your favourite car brand:
          <select 
            id="carBrand" 
            value={carBrand} 
            onChange={handleCarBrandChange}
            style={inputStyle}
          >
            <option value="">Select...</option>
            <option value="mahi">Mahindra</option>
            <option value="benz">Benz</option>
            <option value="toyota">Toyota</option>
          </select>
        </label>
      </div>

      <div>
        <label htmlFor="isChecked" style={labelStyle}>
          Is selected:
          <input 
            type='checkbox' 
            id="isChecked" 
            checked={isChecked} 
            onChange={handleCheckboxChange}
            style={checkboxStyle}
          />
        </label>
      </div>

      <div id="gender">
        <label htmlFor="male" style={labelStyle}>
          <input 
            type='radio' 
            id="male" 
            name="gender" 
            value="male" 
            checked={gender === 'male'} 
            onChange={handleGenderChange} 
            style={radioStyle}
          />
          Male
        </label>

        <label htmlFor="female" style={labelStyle}>
          <input 
            type='radio' 
            id="female" 
            name="gender" 
            value="female" 
            checked={gender === 'female'} 
            onChange={handleGenderChange} 
            style={radioStyle}
          />
          Female
        </label>
      </div>

      <div>
        <label htmlFor="price" style={labelStyle}>
          Price (between 0 and 50):
          <input 
            type='range' 
            id="price" 
            min={0} 
            max={50} 
            step={1} 
            value={price} 
            onChange={handlePriceChange} 
            style={rangeStyle}
          />
        </label>
      </div>
      
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Message: {message}</p>
        <p>Checked: {isChecked ? "checked" : "not checked"}</p>
        <p>Car brand: {carBrand}</p>
        <p>Gender: {gender}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default App;
