import React, { useState } from 'react';

export default function Slider({
  defaultValue, min, max, onChange,
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <input
      type="range"
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      onMouseUp={onChange && handleMouseUp}
    />
  );
}
