import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import '../css/Arrow.css';

const Arrow: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className={`arrow ${active ? 'open' : ''}`}>
      <MdKeyboardArrowRight />
    </div>
  );
};

export default Arrow;
