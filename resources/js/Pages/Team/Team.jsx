import React from 'react';
import Li from './Li';

const Lista = () => {
  return (
    <ul className="max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <Li className="text-gray-800">Item 1</Li>
      <Li className="text-gray-800">Item 2</Li>
      <Li className="text-gray-800">Item 3</Li>
    </ul>
  );
};

export default Lista;
