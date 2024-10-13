import React from 'react';

let numberArray1 = [1, 2, 4, 5, 6];          // Array of numbers
let stringArray1 = ['string1', 'string3'];    // Array of strings

// Finding the index of the number 4 in numberArray1
const fourIndex = numberArray1.findIndex(a => a === 4);

// Finding the index of the string 'string3' in stringArray1
const string3Index = stringArray1.findIndex(a => a === 'string3');

const FindIndex = () => {
  return (
    <div>
      <h4>FindIndex Component</h4>
      <p>fourIndex = { fourIndex}</p>
      <p>string3Index = {string3Index}</p>
    </div>
  );
};

export default FindIndex;

  