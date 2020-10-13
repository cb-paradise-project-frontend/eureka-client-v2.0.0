import React, { useState } from 'react';

import styles from './PriceFilter.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';
import Slider from '../../../../components/Slider';
import Scale from './scale';

const dropdownIcon = String.fromCharCode(9660);

const { List, Min, Max } = Scale;

export default function PriceFilter({ onSubmit }) {
  const [DropDown, toggleDropDown] = useToggleContent();

  const [min, setMin] = useState(Min);
  const [max, setMax] = useState(Max);

  const priceRangeLabel = `$${List[min]}-$${List[max]}`;

  const buttonLabel = ((min > Min || max < Max) && priceRangeLabel)
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
    onSubmit(List[min], List[max]);
    toggleDropDown();
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
      min={Min}
      max={Max}
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
