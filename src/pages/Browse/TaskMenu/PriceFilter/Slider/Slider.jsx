import React, { useState } from 'react';

import styles from './Slider.module.scss';

export default function Slider({
  defaultValue, min, max, onChange, label,
}) {
  const [value, setValue] = useState(defaultValue || '');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <>
      {label &&
        <div className={styles.label} >{label}</div>
      }
      <input
        className={styles.slider}
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        onMouseUp={onChange && handleMouseUp}
      />
    </>
  );
}
