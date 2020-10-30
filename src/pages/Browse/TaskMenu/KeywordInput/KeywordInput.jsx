import React, { useState } from 'react';

import styles from './KeywordInput.module.scss';

import Input from '../../../../components/Input';

export default function KeywordInput({ onSubmit }) {
  const [keyword, inputKeyword] = useState('');

  return (
    <div className={styles.search} >
      <Input.Search
        placeholder="Search for a task"
        value={keyword}
        handleChange={inputKeyword}
        onSubmit={() => onSubmit(keyword)}
      />
    </div>
  );
}
