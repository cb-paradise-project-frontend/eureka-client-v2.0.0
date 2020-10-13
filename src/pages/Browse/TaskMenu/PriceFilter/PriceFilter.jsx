import React, { useState } from 'react';

import styles from './PriceFilter.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';
import Slider from './Slider/Slider';

const dropdownIcon = String.fromCharCode(9660);

const SCALE_LIST = [
  5,
  10,
  20,
  50,
  100,
  200,
  500,
  1000,
  1500,
  2000,
  5000,
  9999,
];

const MAX_SCALE = SCALE_LIST.length - 1;
const MIN_SCALE = 0;

export default function PriceFilter({ onSubmit }) {
  const [DropDown, toggleDropDown] = useToggleContent();

  const [min, setMin] = useState(MIN_SCALE);
  const [max, setMax] = useState(MAX_SCALE);

  const priceRangeLabel = `$${SCALE_LIST[min]}-$${SCALE_LIST[max]}`;

  const buttonLabel = ((min !== MIN_SCALE || max !== MAX_SCALE) && priceRangeLabel)
    || 'Any price';

  const handleMinUpdate = (newMin) => {
    setMin(newMin);
    setMax((prevMax) => Math.max(newMin, prevMax));
  };

  const handleMaxUpdate = (newMax) => {
    setMax(newMax);
    setMin((prevMin) => Math.min(newMax, prevMin));
  };

  const handleSubmit = () => {
    onSubmit(SCALE_LIST[min], SCALE_LIST[max]);
  };

  const CancelButton = () => (
    <Button.Text
      color="grey"
      onClick={toggleDropDown}
    >
      Cancel
    </Button.Text>
  );

  const ConfirmButton = () => (
    <Button
      size="small"
      onClick={handleSubmit}
    >
      Apply
    </Button>
  );

  const sliderElementArray = [
    {
      defaultValue: min,
      onChange: handleMinUpdate,
      label: 'Min',
    },
    {
      defaultValue: max,
      onChange: handleMaxUpdate,
      label: 'Max',
    },
  ];

  const WrappedSlider = ({ label, ...otherProps }) => (
    <div className={styles.slider_wrapper} >
      <div className={styles.label} >
        {label}
      </div>
      <div className={styles.slider} >
        <Slider {...otherProps} />
      </div>
    </div>
  );

  const sliders = sliderElementArray.map(({
    defaultValue, onChange, label,
  }) => (
    <WrappedSlider
      min={MIN_SCALE}
      max={MAX_SCALE}
      defaultValue={defaultValue}
      onChange={onChange}
      label={label}
      key={label}
    />
  ));

  return (
    <>
      <Button.Text
        color="light-blue"
        onClick={toggleDropDown}
      >
        {buttonLabel}{dropdownIcon}
      </Button.Text>
      <DropDown>
        <div className={styles.dropdown} >
          <div className={styles.header} >
            Task price
          </div>
          <div className={styles.content} >
            {priceRangeLabel}
            {sliders}
          </div>
          <div className={styles.footer} >
            <CancelButton />
            <ConfirmButton />
          </div>
        </div>
      </DropDown>
    </>
  );
}
