import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap for styling
import { useSelector } from "react-redux";

export default function ArrayStateVariable() {
  const { message } = useSelector((state: any) => state.helloReducer);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // Function to add a random element
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  // Function to delete an element by its index
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="container" style={{ maxWidth: '500px', paddingLeft: '0', marginLeft: '0' }}>
      <h2>Array State Variable</h2>
      <h3> {message} </h3>

      {/* Add Element Button */}
      <button className="btn btn-success mb-3" onClick={addElement}>
        Add Element
      </button>

      {/* List of array items */}
      <ul className="list-group">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Display the item */}
            {item}

            {/* Delete Button */}
            <button className="btn btn-danger" onClick={() => deleteElement(index)} id="wd-delete-element-click">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
}

