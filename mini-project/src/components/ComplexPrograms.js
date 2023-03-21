import React,{ useState } from 'react'
import './CourseDetails.css'


function ComplexPrograms () {
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, name]);
    setName('');
  }

  return (
    <div>
      <h1>Complex Program</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



export default ComplexPrograms;