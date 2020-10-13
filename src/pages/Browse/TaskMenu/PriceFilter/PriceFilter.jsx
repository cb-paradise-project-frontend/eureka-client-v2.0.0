import React, { useState } from 'react';

import styles from './PriceFilter.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';
import Slider from './Slider/Slider';

const dropdownIcon = String.fromCharCode(9660);
const MAX_PRICE = '9999';
const MIN_PRICE = '5';

export default function PriceFilter() {
  const [DropDown, toggleDropDown] = useToggleContent();

  const [min, setMin] = useState(MIN_PRICE);
  const [max, setMax] = useState(MAX_PRICE);

  const handleMinUpdate = (newMin) => {
    setMin(newMin);
    setMax((prevMax) => Math.max(newMin, prevMax));
  };

  const handleMaxUpdate = (newMax) => {
    setMax(newMax);
    setMin((prevMin) => Math.min(newMax, prevMin));
  };

  const priceRange = `$${min}-$${max}`;

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
      min={MIN_PRICE}
      max={MAX_PRICE}
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
        Any price {dropdownIcon}
      </Button.Text>
      <DropDown>
        <div className={styles.dropdown} >
          <div className={styles.header} >
            Task price
          </div>
          <div className={styles.content} >
            {priceRange}
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
