import React, { useContext, useState } from 'react';

import styles from './CommentInput.module.scss';

import TextArea from '../../../../../components/TextArea';
import CommentAvatar from '../CommentAvatar';
import { AuthContext } from '../../../../../auth/Auth';

export default function CommentInput({ addComment }) {
  const [input, updateInput] = useState('');

  const { currentUser } = useContext(AuthContext);

  const placeholder = 'Leave a message here';
  const WORD_LIMIT = 1500;

  const handleSubmit = () => {
    addComment(input);
    updateInput('');
  };

  const Footer = () => (
    <>
      <button
        className={styles.submit_button}
        disabled={input.length < 1}
        onClick={handleSubmit}
      >
        Send
      </button>
      <div className={styles.word_count} >
        {WORD_LIMIT - input.length}
      </div>
    </>
  );

    console.log(currentUser);

  return (
    <>
      <CommentAvatar avatarId={currentUser.avatarId} />
      <div className={styles.input} >
        <TextArea
          size={'large'}
          placeholder={placeholder}
          displayValue={input}
          onInputChange={updateInput}
          maxLength={WORD_LIMIT}
        />
        <div className={styles.input_footer} >
          <Footer />
        </div>
      </div>
    </>
  );
}
